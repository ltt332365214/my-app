"use client";

import { useState, useEffect } from "react";

interface Todo {
  id: string;
  title: string;
  created_at: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchTodos() {
    try {
      const res = await fetch("/api/todos");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Fetch failed");
      setTodos(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Add failed");
      setTitle("");
      await fetchTodos();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  async function deleteTodo(id: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/todos?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      await fetchTodos();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 font-sans">
      <main className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-zinc-900">
          Todo List
        </h1>

        <form onSubmit={addTodo} className="mb-6 flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a new todo..."
            className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 outline-none focus:border-zinc-500"
          />
          <button
            type="submit"
            disabled={loading || !title.trim()}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700 disabled:opacity-50"
          >
            Add
          </button>
        </form>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm"
            >
              <span className="text-zinc-800">{todo.title}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                disabled={loading}
                className="text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && !error && (
          <p className="mt-8 text-center text-zinc-400">
            No todos yet. Add one above!
          </p>
        )}
      </main>
    </div>
  );
}
