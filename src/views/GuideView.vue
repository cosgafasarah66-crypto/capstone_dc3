<script setup>
import { ref } from 'vue'

const steps = [
  { title: 'Install tools', text: 'Install Node.js, then check versions.', code: 'node -v\nnpm -v' },
  { title: 'Create project', text: 'Scaffold with Vite and install packages.', code: 'npm install\nnpm run dev' },
  { title: 'Project layout', text: 'main.js starts the app, App.vue is the shell, views are pages, components are reusable pieces.', code: 'src/\n  main.js  App.vue  style.css\n  router/index.js\n  stores/tasks.js\n  components/  views/' },
  { title: 'Write a component', text: 'Props go in, events come out.', code: "defineProps({ task: Object })\ndefineEmits(['edit', 'remove'])" },
  { title: 'Add routing', text: 'Map URLs to views, link with RouterLink.', code: "{ path: '/board', component: BoardView }" },
  { title: 'Share state', text: 'Export one ref from a module.', code: "export const tasks = ref([])" },
  { title: 'Build CRUD', text: 'push, find, filter.', code: 'tasks.value.push(task)\nObject.assign(found, changes)\ntasks.value = tasks.value.filter(...)' },
  { title: 'Validate and ship', text: 'Check input, then build.', code: 'npm run build\nnpm run preview' }
]
const i = ref(0)
</script>

<template>
  <h1>Build guide</h1>
  <div class="steps">
    <button v-for="(s, n) in steps" :key="n" :class="{ on: i === n }" @click="i = n">{{ n + 1 }}. {{ s.title }}</button>
  </div>
  <div class="card">
    <h2>Step {{ i + 1 }}: {{ steps[i].title }}</h2>
    <p>{{ steps[i].text }}</p>
    <pre><code>{{ steps[i].code }}</code></pre>
  </div>
</template>