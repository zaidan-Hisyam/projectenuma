import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onAddTask(description);
    if (success) {
      setDescription(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Tambahkan tugas baru"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-field"
      />

      <button type="submit" className="btn-primary">
        Tambah
      </button>
    </form>
  );
}
