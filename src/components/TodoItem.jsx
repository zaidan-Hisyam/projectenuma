import { useState } from "react";

export default function TodoItem({ task, onUpdateTask, onDeleteTask, onToggleStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(task.description);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) setEditDesc(task.description);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (onUpdateTask(task.id, editDesc, task.status)) setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <div className="todo-item-content">
        
        <div className="todo-item-left">
          <input
            type="checkbox"
            checked={task.status === "1"}
            onChange={() => onToggleStatus(task.id)}
            className="todo-checkbox"
          />
          <span
            onClick={() => onToggleStatus(task.id)}
            className={`todo-text ${task.status === "1" ? "completed" : ""}`}
          >
            {task.description}
          </span>
        </div>

        <div className="todo-actions">
          <button onClick={handleToggleEdit} className="btn-icon" title="Ubah tugas">Edit</button>
          <button onClick={() => onDeleteTask(task.id)} className="btn-icon delete" title="Hapus tugas">Hapus</button>
        </div>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmitEdit} className="edit-form-container edit-input-group">
          <input
            type="text"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="input-field"
            placeholder="Ubah deskripsi tugas..."
            autoFocus
          />
          <div className="edit-actions">
            <button type="button" onClick={handleToggleEdit} className="btn-sm btn-secondary">Batal</button>
            <button type="submit" className="btn-sm btn-primary">Simpan</button>
          </div>
        </form>
      )}
    </li>
  );
}
