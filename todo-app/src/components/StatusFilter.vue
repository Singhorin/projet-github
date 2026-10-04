<!--
  FONCTIONNALITÉ — Membre 5 : Filtrer les tâches par statut
  Utilise `statusFilter` et `remainingCount` du composable useTasks.
  Ce fichier peut être développé et commité indépendamment des autres.
-->
<template>
  <div class="status-filter">
    <div class="tabs">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        :class="{ 'is-active': statusFilter === option.value }"
        @click="statusFilter = option.value"
      >
        {{ option.label }}
      </button>
    </div>
    <span class="count">{{ remainingCount }} tâche(s) restante(s)</span>
  </div>
</template>

<script setup>
import { useTasks } from '../composables/useTasks'

const { statusFilter, remainingCount } = useTasks()

const options = [
  { value: 'all', label: 'Toutes' },
  { value: 'active', label: 'En cours' },
  { value: 'done', label: 'Terminées' }
]
</script>
