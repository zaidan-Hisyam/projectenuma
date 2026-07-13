import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const showFlash = (type, message) => {
    if (type === "error") {
      setError(message);
      setSuccess("");
    } else {
      setSuccess(message);
      setError("");
    }
    const timer = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timer);
  };

  const addTask = (description) => {
    setError("");
    setSuccess("");

    if (!description) {
      showFlash("error", "Mohon isi todolist yang akan disimpan");
      return false;
    }
    if (description.length < 5) {
      showFlash("error", "Isikan todolist minimal 5 karakter");
      return false;
    }

    const newTask = {
      id: +new Date(), 
      description: description.trim(),
      status: "0",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    showFlash("success", "Berhasil menyimpan data");
    return true;
  };

  const updateTask = (id, updatedDesc, updatedStatus) => {
    setError("");
    setSuccess("");

    if (!updatedDesc || updatedDesc.trim().length < 5) {
      showFlash("error", "Isikan to do list minimal 5 karakter");
      return false;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: updatedDesc.trim(), status: updatedStatus } : task
      )
    );
    showFlash("success", "Berhasil memperbarui data");
    return true;
  };

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "1" ? "0" : "1" } : task
      )
    );
    showFlash("success", "Berhasil memperbarui status tugas");
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    showFlash("success", "Berhasil menghapus data");
  };

  return {
    tasks,
    error,
    success,
    addTask,
    updateTask,
    toggleTaskStatus,
    deleteTask,
  };
}
