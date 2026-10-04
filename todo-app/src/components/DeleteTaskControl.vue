<template>
  <button
    type="button"
    class="delete-control"
    @click="handleDelete"
    aria-label="Supprimer la tâche"
  >
    Supprimer
  </button>
</template>

<script setup>
import { useTasks } from '../composables/useTasks'

const props = defineProps({
  task: { type: Object, required: true }
})

const { removeTask } = useTasks()

function handleDelete() {
  const confirmed = window.confirm(`Supprimer la tâche « ${props.task.title} » ?`)
  if (confirmed) {
    removeTask(props.task.id)
  }
}
</script>
