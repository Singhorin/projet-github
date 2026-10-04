<!--
  FONCTIONNALITÉ — Membre 4 : Marquer une tâche comme terminée / à faire
  Utilise uniquement `toggleTask()` du composable useTasks.
  Ce fichier peut être développé et commité indépendamment des autres.
-->
<template>
  <button
    type="button"
    class="status-toggle"
    :class="{ 'is-checked': task.done }"
    @click="toggleTask(task.id)"
    :aria-pressed="task.done"
    :aria-label="task.done ? 'Marquer comme à faire' : 'Marquer comme terminée'"
  >
    <span v-if="task.done">✓</span>
  </button>
</template>

<script setup>
import { useTasks } from '../composables/useTasks'

defineProps({
  task: { type: Object, required: true }
})

const { toggleTask } = useTasks()
</script>
