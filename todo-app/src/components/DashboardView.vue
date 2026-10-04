<template>
  <section>
    <h1>Voici un aperçu de vos tâches</h1>

    <div class="stats">
      <div class="stat"><span class="stat__value">{{ totalCount }}</span>Total des tâches</div>
      <div class="stat stat--todo"><span class="stat__value">{{ remainingCount }}</span>À faire</div>
      <div class="stat stat--done"><span class="stat__value">{{ doneCount }}</span>Terminées</div>
    </div>

    <div class="panels">
      <div class="panel">
        <h2>Tâches récentes</h2>
        <ul v-if="recentTasks.length" class="recent">
          <li v-for="task in recentTasks" :key="task.id" :class="{ 'is-done': task.done }">
            <span class="dot" :class="task.done ? 'dot--done' : 'dot--todo'"></span>
            {{ task.title }}
          </li>
        </ul>
        <p v-else class="empty-state">Aucune tâche pour le moment.</p>
      </div>

      <div class="panel">
        <h2>Répartition des tâches</h2>
        <div class="donut" :style="chartStyle"><div class="donut__hole">{{ totalCount }}<small>Total</small></div></div>
        <p class="legend"><span class="dot dot--todo"></span>À faire {{ remainingCount }}
          <span class="dot dot--done"></span>Terminées {{ doneCount }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useTasks } from '../composables/useTasks'

const { totalCount, doneCount, remainingCount, recentTasks } = useTasks()

const chartStyle = computed(() => {
  if (!totalCount.value) return { background: 'var(--line)' }
  const pct = Math.round((doneCount.value / totalCount.value) * 100)
  return { background: `conic-gradient(var(--green) 0 ${pct}%, var(--blue) ${pct}% 100%)` }
})
</script>
