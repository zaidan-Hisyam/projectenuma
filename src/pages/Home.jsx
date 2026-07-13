import { useTasks } from "../hooks/useTasks";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Toast from "../components/Toast";

export default function Home() {
  const {
    tasks,
    error,
    success,
    addTask,
    updateTask,
    toggleTaskStatus,
    deleteTask,
  } = useTasks();

  return (
    <>
      <header>
        <h1 className="page-title">Daftar Tugas</h1>
        <p className="page-subtitle">Kelola tugas Anda dengan sangatttt mudah!</p>
      </header>

      <main>
        <TodoForm onAddTask={addTask} />

        <TodoList
          tasks={tasks}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          onToggleStatus={toggleTaskStatus}
        />
      </main>

      <Toast error={error} success={success} />
    </>
  );
}
