import { ref, watch } from 'vue'

const KEY = 'taskflow-tasks'

function load() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved) return JSON.parse(saved)
  } catch (e) {}
  return [
    { id: 1, title: 'Install Node.js', notes: 'Version 18 or newer', priority: 'high', status: 'done' },
    { id: 2, title: 'Create the project with Vite', notes: '', priority: 'medium', status: 'doing' },
    { id: 3, title: 'Build the task board', notes: 'Create, read, update, delete', priority: 'low', status: 'todo' }
  ]
}

// One shared array: every page that imports it sees the same data.
export const tasks = ref(load())

watch(tasks, (value) => {
  try { localStorage.setItem(KEY, JSON.stringify(value)) } catch (e) {}
}, { deep: true })

// CREATE
export function addTask(data) {
  tasks.value.push({ id: Date.now(), ...data })
}

// UPDATE
export function updateTask(id, changes) {
  const task = tasks.value.find((t) => t.id === id)
  if (task) Object.assign(task, changes)
}

// DELETE
export function removeTask(id) {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}