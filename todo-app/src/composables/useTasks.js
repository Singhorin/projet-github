import { ref, computed, watch } from 'vue'

// Socle commun : état réactif des tâches + sauvegarde dans localStorage.
const STORAGE_KEY = 'todo-app-l2gl-tasks'

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Lecture localStorage impossible', e)
    return []
  }
}

// randomUUID n'existe pas hors localhost/HTTPS : on prévoit une solution de repli
function newId() {
  return globalThis.crypto?.randomUUID?.() ?? Date.now() + '-' + Math.random().toString(16).slice(2)
}

const tasks = ref(loadTasks())
const statusFilter = ref('all') // 'all' | 'active' | 'done'

watch(tasks, (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value)), { deep: true })

export function useTasks() {
  function addTask(title) {
    const trimmed = title.trim()
    if (!trimmed) return
    tasks.value.push({ id: newId(), title: trimmed, done: false, createdAt: Date.now() })
  }

  function updateTask(id, newTitle) {
    const trimmed = newTitle.trim()
    const task = tasks.value.find((t) => t.id === id)
    if (task && trimmed) task.title = trimmed
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  function toggleTask(id) {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.done = !task.done
  }

  const filteredTasks = computed(() => {
    if (statusFilter.value === 'active') return tasks.value.filter((t) => !t.done)
    if (statusFilter.value === 'done') return tasks.value.filter((t) => t.done)
    return tasks.value
  })

  const totalCount = computed(() => tasks.value.length)
  const doneCount = computed(() => tasks.value.filter((t) => t.done).length)
  const remainingCount = computed(() => totalCount.value - doneCount.value)
  const recentTasks = computed(() =>
    [...tasks.value].sort((a, b) => b.createdAt - a.createdAt).slice(0, 4)
  )

  return {
    tasks, statusFilter, filteredTasks, totalCount, doneCount, remainingCount, recentTasks,
    addTask, updateTask, removeTask, toggleTask
  }
}
