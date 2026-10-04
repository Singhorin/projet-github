<template>
  <div class="layout">
    <SideBar :current="view" @navigate="view = $event" />
    <main class="content">
      <DashboardView v-if="view === 'dashboard'" />
      <TasksView v-else-if="view === 'tasks'" />
      <AddTaskForm v-else-if="view === 'add'" />
      <SearchView v-else-if="view === 'search'" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'
import DashboardView from './components/DashboardView.vue'
import TasksView from './components/TasksView.vue'
import AddTaskForm from './components/AddTaskForm.vue'
import SearchView from './components/SearchView.vue'

// Page affichée : 'dashboard' | 'tasks' | 'add' | 'search'
const view = ref('dashboard')
</script>
