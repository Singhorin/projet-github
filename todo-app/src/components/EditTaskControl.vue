<!-- FONCTIONNALITÉ — Membre 2 : Modifier une tâche -->
<template>
  <div class="task-title">
    <button v-if="!isEditing" type="button" class="task-title__text" :title="'Modifier : ' + task.title" @click="startEdit">
      {{ task.title }}
    </button>

    <div v-else class="task-title__edit">
      <input ref="editInput" v-model="draft" type="text" @keyup.enter="save" @keyup.escape="cancel" />
      <button type="button" class="save" @click="save">Enregistrer</button>
      <button type="button" class="cancel" @click="cancel">Annuler</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useTasks } from '../composables/useTasks'

const props = defineProps({ task: { type: Object, required: true } })
const { updateTask } = useTasks()

const isEditing = ref(false)
const draft = ref('')
const editInput = ref(null)

async function startEdit() {
  draft.value = props.task.title
  isEditing.value = true
  await nextTick()
  editInput.value?.focus()
}

function save() {
  if (draft.value.trim()) updateTask(props.task.id, draft.value)
  isEditing.value = false
}

function cancel() {
  isEditing.value = false
}
</script>
