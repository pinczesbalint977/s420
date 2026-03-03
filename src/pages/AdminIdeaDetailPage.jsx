import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addAdminIdeaComment, getAdminIdeaById, updateAdminIdea } from '../firebase/adminIdeas';
import { sendNotificationEvent } from '../firebase/notifications';

const teamMembers = ['Ferenc', 'Bálint', 'Zoltán'];

function formatDateValue(value) {
  if (!value) return '';
  if (typeof value === 'string') return new Date(value).toLocaleString('hu-HU');
  if (value?.toDate) return value.toDate().toLocaleString('hu-HU');
  return '';
}

function AdminIdeaDetailPage() {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentDraft, setCommentDraft] = useState({ authorName: 'Ferenc', text: '' });
  const [completionDraft, setCompletionDraft] = useState({
    responderName: 'Ferenc',
    cost: '',
    requirements: '',
    timeEstimate: '',
    feasible: ''
  });

  async function loadIdea() {
    const data = await getAdminIdeaById(id);
    setIdea(data);
    if (data) {
      setCommentDraft((prev) => ({ ...prev, authorName: data.assigneeName || 'Ferenc' }));
      setCompletionDraft({
        responderName: data.completionReport?.responderName || data.assigneeName || 'Ferenc',
        cost: data.completionReport?.cost || '',
        requirements: data.completionReport?.requirements || '',
        timeEstimate: data.completionReport?.timeEstimate || '',
        feasible: data.completionReport?.feasible || ''
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    loadIdea();
  }, [id]);

  async function handleCommentSubmit() {
    if (!commentDraft.authorName || !commentDraft.text.trim() || !idea) {
      alert('Kommenthez név és szöveg szükséges.');
      return;
    }

    const commentText = commentDraft.text.trim();

    await addAdminIdeaComment(
      idea.id,
      { authorName: commentDraft.authorName, text: commentText },
      idea.comments || []
    );
    try {
      await sendNotificationEvent({
        type: 'admin_idea_comment_created',
        ideaId: idea.id,
        ideaTitle: idea.title,
        authorName: commentDraft.authorName,
        text: commentText
      });
    } catch (notifyError) {
      console.warn('Admin idea comment notification failed:', notifyError);
    }
    setCommentDraft((prev) => ({ ...prev, text: '' }));
    await loadIdea();
  }

  async function handleComplete() {
    if (!idea) return;

    if (
      !completionDraft.responderName ||
      !completionDraft.cost ||
      !completionDraft.requirements ||
      !completionDraft.timeEstimate ||
      !completionDraft.feasible
    ) {
      alert('Készre állításhoz kötelező kitölteni: Mennyiből jönne ki? Mi kell hozzá? Mennyi idő? Kivitelezhető?');
      return;
    }

    if (idea.assigneeName && completionDraft.responderName !== idea.assigneeName) {
      alert('A lezáró választ annak kell megadnia, akinek a feladat ajánlva lett.');
      return;
    }

    await updateAdminIdea(idea.id, {
      status: 'done',
      completionReport: {
        ...completionDraft,
        answeredAt: new Date().toISOString()
      }
    });
    try {
      await sendNotificationEvent({
        type: 'admin_idea_completed',
        ideaId: idea.id,
        ideaTitle: idea.title,
        assigneeName: idea.assigneeName,
        completionReport: {
          ...completionDraft
        }
      });
    } catch (notifyError) {
      console.warn('Admin idea completion notification failed:', notifyError);
    }
    await loadIdea();
  }

  if (loading) return <p>Töltés...</p>;
  if (!idea) return <p>Nem található ez a feladat / ötlet.</p>;

  return (
    <section>
      <Link to="/admin" className="back-link">Vissza az admin listához</Link>
      <div className="detail-shell">
        <article className="card detail-card">
          <h1>{idea.title}</h1>
          <p><strong>Típus:</strong> {idea.kind === 'idea' ? 'Ötlet' : 'Feladat'}</p>
          <p><strong>Létrehozta:</strong> {idea.authorName}</p>
          <p><strong>Ajánlva:</strong> {idea.assigneeName}</p>
          <p><strong>Létrehozva:</strong> {formatDateValue(idea.createdAt)}</p>
          <p><strong>Állapot:</strong> {idea.status === 'done' ? 'Készre nyilvánítva' : 'Nyitott'}</p>
          <div className="detail-description">
            <strong>Leírás</strong>
            <p>{idea.description}</p>
          </div>
        </article>

        <article className="card detail-card">
          <h2>Kommentek</h2>
          {(idea.comments || []).length === 0 && <p>Még nincs komment.</p>}
          <div className="comment-list">
            {(idea.comments || []).map((comment, index) => (
              <div className="comment-box" key={`${idea.id}-${index}`}>
                <strong>{comment.authorName}</strong>
                <span>{formatDateValue(comment.createdAt)}</span>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>

          <div className="comment-form">
            <label className="labeled-field compact">
              <span>Kommentelő neve</span>
              <select className="compact-select" value={commentDraft.authorName} onChange={(event) => setCommentDraft((prev) => ({ ...prev, authorName: event.target.value }))}>
                {teamMembers.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </label>
            <label className="labeled-field compact">
              <span>Komment</span>
              <textarea rows={4} value={commentDraft.text} onChange={(event) => setCommentDraft((prev) => ({ ...prev, text: event.target.value }))} />
            </label>
            <button className="btn secondary" type="button" onClick={handleCommentSubmit}>Komment mentése</button>
          </div>
        </article>

        <article className="card detail-card">
          <h2>Feladat lezárása</h2>
          <p>Ezt annak kell kitöltenie, akinek a feladat ajánlva lett.</p>
          <div className="detail-form-stack">
            <label className="labeled-field compact">
              <span>Ki válaszol erre a feladatra</span>
              <select className="compact-select" value={completionDraft.responderName} onChange={(event) => setCompletionDraft((prev) => ({ ...prev, responderName: event.target.value }))}>
                {teamMembers.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </label>
            <label className="labeled-field compact">
              <span>Mennyiből jönne ki?</span>
              <input value={completionDraft.cost} onChange={(event) => setCompletionDraft((prev) => ({ ...prev, cost: event.target.value }))} />
            </label>
            <label className="labeled-field compact">
              <span>Mennyi idő?</span>
              <input value={completionDraft.timeEstimate} onChange={(event) => setCompletionDraft((prev) => ({ ...prev, timeEstimate: event.target.value }))} />
            </label>
            <label className="labeled-field compact">
              <span>Kivitelezhető?</span>
              <select className="compact-select" value={completionDraft.feasible} onChange={(event) => setCompletionDraft((prev) => ({ ...prev, feasible: event.target.value }))}>
                <option value="">Válassz</option>
                <option value="Igen">Igen</option>
                <option value="Nem">Nem</option>
                <option value="Részben">Részben</option>
              </select>
            </label>
            <label className="labeled-field compact">
              <span>Mi kell hozzá?</span>
              <textarea rows={4} value={completionDraft.requirements} onChange={(event) => setCompletionDraft((prev) => ({ ...prev, requirements: event.target.value }))} />
            </label>
          </div>
          {idea.status !== 'done' && <button className="btn" type="button" onClick={handleComplete}>Készre nyilvánítás</button>}

          {idea.completionReport && (
            <div className="completion-summary">
              <p><strong>Válaszadó:</strong> {idea.completionReport.responderName}</p>
              <p><strong>Mennyiből jönne ki:</strong> {idea.completionReport.cost}</p>
              <p><strong>Mi kell hozzá:</strong> {idea.completionReport.requirements}</p>
              <p><strong>Mennyi idő:</strong> {idea.completionReport.timeEstimate}</p>
              <p><strong>Kivitelezhető:</strong> {idea.completionReport.feasible}</p>
              <p><strong>Lezárva:</strong> {formatDateValue(idea.completionReport.answeredAt)}</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default AdminIdeaDetailPage;


