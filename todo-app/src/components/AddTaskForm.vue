<!-- FONCTIONNALITÉ — Membre 1 : Ajouter une tâche (page « Ajouter une tâche ») -->
<template>
  <section>
    <h1>Ajouter une tâche</h1>
    <form class="add-form" @submit.prevent="handleSubmit">
      <input v-model="form.title" type="text" placeholder="Titre de la tâche..." aria-label="Titre de la tâche" />
      <button type="submit">Ajouter</button>
    </form>
    <p v-if="message" class="feedback" :class="{ 'feedback--error': isError }">{{ message }}</p>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useTasks } from '../composables/useTasks'

const { addTask } = useTasks()
const form = reactive({ title: '' })
const message = ref('')
const isError = ref(false)

function handleSubmit() {
  if (!form.title.trim()) {
    isError.value = true
    message.value = 'Saisissez un titre avant d\'ajouter la tâche.'
    return
  }
  addTask(form.title)
  form.title = ''
  isError.value = false
  message.value = 'Tâche ajoutée. Retrouvez-la dans « Tâches ».'
}
</script>
