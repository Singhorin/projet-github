<template>
  <ul v-if="tasks.length" class="task-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
  <p v-else class="empty-state">{{ emptyText }}</p>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: { type: Array, required: true },
  emptyText: { type: String, default: 'Aucune tâche à afficher.' }
})
</script>
