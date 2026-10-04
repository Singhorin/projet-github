<template>
  <section>
    <h1>Rechercher une tâche</h1>
    <input v-model="query" class="search-input" type="search" placeholder="Nom de la tâche..." aria-label="Rechercher une tâche" />

    <p v-if="!term" class="empty-state">Saisissez le nom d'une tâche pour la rechercher.</p>
    <TaskList v-else-if="results.length" :tasks="results" />
    <p v-else class="empty-state empty-state--warn">
      La tâche « {{ query.trim() }} » n'est pas incluse dans la liste des tâches.
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import TaskList from './TaskList.vue'
import { useTasks } from '../composables/useTasks'

const { tasks } = useTasks()
const query = ref('')
const term = computed(() => query.value.trim().toLowerCase())
const results = computed(() => tasks.value.filter((t) => t.title.toLowerCase().includes(term.value)))
</script>
