<!--
  SOCLE COMMUN — assemble les composants de fonctionnalité pour une tâche.
  Ne contient aucune logique métier : il ne fait qu'agencer les 3 contrôles
  (Membre 2, 3, 4) autour d'une même tâche.
-->
<template>
  <li class="task" :class="{ 'task--done': task.done }">
    <StatusToggleControl :task="task" />
    <EditTaskControl :task="task" />
    <DeleteTaskControl :task="task" />
  </li>
</template>

<script setup>
import StatusToggleControl from './StatusToggleControl.vue'
import EditTaskControl from './EditTaskControl.vue'
import DeleteTaskControl from './DeleteTaskControl.vue'

defineProps({
  task: { type: Object, required: true }
})
</script>
