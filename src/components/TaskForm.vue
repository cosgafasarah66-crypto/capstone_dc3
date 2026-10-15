<script setup>
import { reactive, ref, watch } from 'vue'

const props = defineProps({ editing: Object })
const emit = defineEmits(['save', 'cancel'])

const blank = () => ({ title: '', notes: '', priority: 'medium', status: 'todo' })
const form = reactive(blank())
const error = ref('')

// When a task is chosen for editing, copy it into the form.
watch(() => props.editing, (task) => {
  Object.assign(form, task ? { ...task } : blank())
  error.value = ''
})

function submit() {
  if (!form.title.trim()) {
    error.value = 'Enter a task title.'
    return
  }
  emit('save', { ...form, title: form.title.trim() })
  Object.assign(form, blank())
  error.value = ''
}
</script>

<template>
  <div class="card" @keydown.enter.prevent="submit">
    <h3>{{ editing ? 'Edit task' : 'Add a task' }}</h3>
    <div class="form">
      <label>Title<input v-model="form.title" placeholder="What needs doing?" /></label>
      <label>Priority
        <select v-model="form.priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
      <label>Status
        <select v-model="form.status">
          <option value="todo">To do</option>
          <option value="doing">In progress</option>
          <option value="done">Done</option>
        </select>
      </label>
      <span class="row">
        <button class="btn" @click="submit">{{ editing ? 'Save changes' : 'Add task' }}</button>
        <button v-if="editing" class="btn ghost" @click="$emit('cancel')">Cancel</button>
      </span>
    </div>
    <label class="notes">Notes<textarea rows="2" v-model="form.notes"></textarea></label>
    <p class="err" role="alert">{{ error }}</p>
  </div>
</template>