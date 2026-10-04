<template>
  <section>
    <h1>Mes tâches</h1>
    <StatusFilter />
    <TaskList :tasks="filteredTasks" empty-text="Aucune tâche pour ce filtre." />
  </section>
</template>

<script setup>
import StatusFilter from './StatusFilter.vue'
import TaskList from './TaskList.vue'
import { useTasks } from '../composables/useTasks'

const { filteredTasks } = useTasks()
</script>
