<script setup>
import { ref, computed, watch } from 'vue'

const items = [
  ['Node.js 18+ and npm', 'Runs the build tools. Check with node -v.'],
  ['A code editor', 'VS Code with the Vue (Official) extension.'],
  ['Basic HTML, CSS and JavaScript', 'Variables, functions, arrays and objects.'],
  ['Project scaffolding with Vite', 'Creates the folders and dev server.'],
  ['Single-file components', 'Template, script and style in one .vue file.'],
  ['Vue Router', 'Separate pages without reloading.'],
  ['Reactive state', 'ref and reactive keep the screen in sync.'],
  ['Task CRUD features', 'Create, read, update and delete tasks.'],
  ['Form validation', 'Reject empty titles with a clear message.'],
  ['Persistence', 'Save tasks in localStorage.']
]

let saved = []
try { saved = JSON.parse(localStorage.getItem('taskflow-req') || '[]') } catch (e) {}
const done = ref(saved)
watch(done, (v) => { try { localStorage.setItem('taskflow-req', JSON.stringify(v)) } catch (e) {} }, { deep: true })
const percent = computed(() => Math.round((done.value.length / items.length) * 100))
</script>

<template>
  <h1>Requirements</h1>
  <div class="bar"><i :style="{ width: percent + '%' }"></i></div>
  <p><strong>{{ done.length }} of {{ items.length }}</strong> ready.</p>
  <label v-for="(item, i) in items" :key="i" class="req">
    <input type="checkbox" :value="i" v-model="done" />
    <span>{{ item[0] }}<small>{{ item[1] }}</small></span>
  </label>
  <p><RouterLink class="btn" to="/guide">Continue to the build guide</RouterLink></p>
</template>