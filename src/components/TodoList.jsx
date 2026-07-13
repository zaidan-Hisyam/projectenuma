import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onUpdateTask, onDeleteTask, onToggleStatus }) {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "Semua", emptyMsg: "Belum ada tugas yang ditambahkan." },
    { id: "active", label: "Belum Selesai", emptyMsg: "Tidak ada tugas yang belum selesai." },
    { id: "completed", label: "Selesai", emptyMsg: "Tidak ada tugas yang selesai." }
  ];

  const filteredTasks = tasks.filter((task) => 
    filter === "all" ? true : task.status === (filter === "active" ? "0" : "1")
  );

  return (
    <div className="todo-list-container">
      <div className="list-header">
        <span className="list-title">Daftar Tugas</span>
        
        <div className="filters">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`filter-btn ${filter === f.id ? "active" : ""}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onToggleStatus={onToggleStatus}
            />
        ))}

        {filteredTasks.length === 0 && (
          <div className="empty-state">
            {filterOptions.find(f => f.id === filter).emptyMsg}
          </div>
        )}
      </ul>
    </div>
  );
}
