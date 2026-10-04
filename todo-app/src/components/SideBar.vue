<template>
  <aside class="sidebar">
    <div class="brand">Carnet de tâches</div>
    <nav>
      <button
        v-for="item in items"
        :key="item.key"
        type="button"
        class="nav-item"
        :class="{ 'is-active': current === item.key }"
        @click="emit('navigate', item.key)"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        {{ item.label }}
      </button>
    </nav>
  </aside>
</template>

<script setup>
defineProps({ current: { type: String, required: true } })
const emit = defineEmits(['navigate'])

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { key: 'tasks', label: 'Tâches', icon: '☑' },
  { key: 'add', label: 'Ajouter une tâche', icon: '＋' },
  { key: 'search', label: 'Rechercher', icon: '🔍' }
]
</script>
