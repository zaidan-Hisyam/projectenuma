
export default function Toast({ error, success }) {
  if (!error && !success) return null;

  return (
    <div className="toast-container">
      {error && (
        <div className="toast error">
          <span>•</span>
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="toast success">
          <span>✓</span>
          <span>{success}</span>
        </div>
      )}
    </div>
  );
}
