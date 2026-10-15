<script setup>
import { ref } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import TaskCard from '../components/TaskCard.vue'
import { tasks, addTask, updateTask, removeTask } from '../stores/tasks'

const editing = ref(null)
const search = ref('')
const priority = ref('all')
const columns = [['todo', 'To do'], ['doing', 'In progress'], ['done', 'Done']]

// READ (with filters)
function visible(status) {
  return tasks.value.filter((t) =>
    t.status === status &&
    (priority.value === 'all' || t.priority === priority.value) &&
    (t.title + ' ' + t.notes).toLowerCase().includes(search.value.toLowerCase())
  )
}

function save(data) {
  if (editing.value) updateTask(editing.value.id, data)
  else addTask(data)
  editing.value = null
}

function move(task, direction) {
  const order = ['todo', 'doing', 'done']
  const next = Math.max(0, Math.min(2, order.indexOf(task.status) + direction))
  updateTask(task.id, { status: order[next] })
}

function remove(task) {
  if (confirm('Delete "' + task.title + '"?')) removeTask(task.id)
}
</script>

<template>
  <h1>Task board</h1>
  <p>{{ tasks.length }} tasks saved in this browser.</p>

  <TaskForm :editing="editing" @save="save" @cancel="editing = null" />

  <div class="tools">
    <input v-model="search" type="search" placeholder="Search tasks" aria-label="Search tasks" />
    <select v-model="priority" aria-label="Filter by priority">
      <option value="all">All priorities</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  </div>

  <div class="board">
    <section v-for="[key, label] in columns" :key="key" class="col">
      <h3>{{ label }} <span>{{ visible(key).length }}</span></h3>
      <p v-if="!visible(key).length" class="empty">Nothing here. Add a task or change the filter.</p>
      <TaskCard
        v-for="t in visible(key)" :key="t.id" :task="t"
        @edit="editing = $event" @remove="remove" @move="move"
      />
    </section>
  </div>
</template>