<script setup>
defineProps({ task: { type: Object, required: true } })
defineEmits(['edit', 'remove', 'move'])
</script>

<template>
  <article class="task" :class="task.priority">
    <strong>{{ task.title }}</strong>
    <p v-if="task.notes">{{ task.notes }}</p>
    <div class="row">
      <button class="btn ghost sm" :disabled="task.status === 'todo'" @click="$emit('move', task, -1)">Back</button>
      <button class="btn ghost sm" :disabled="task.status === 'done'" @click="$emit('move', task, 1)">Forward</button>
      <button class="btn ghost sm" @click="$emit('edit', task)">Edit</button>
      <button class="btn ghost sm" @click="$emit('remove', task)">Delete</button>
    </div>
  </article>
</template>