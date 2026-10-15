<template>
  <section class="hero">
    <h1>Build a task manager in Vue, one step at a time.</h1>
    <p>Read the requirements, follow the build steps, then try the finished CRUD board.</p>
    <RouterLink class="btn" to="/requirements">Start with requirements</RouterLink>
    <RouterLink class="btn ghost" to="/board">Open the task board</RouterLink>
  </section>
  <div class="grid">
    <div class="card"><h3>Requirements</h3><p>Check off the tools and skills you need.</p><RouterLink to="/requirements">Open checklist</RouterLink></div>
    <div class="card"><h3>Build guide</h3><p>Eight steps from empty folder to working app.</p><RouterLink to="/guide">Follow the steps</RouterLink></div>
    <div class="card"><h3>Task board</h3><p>Add, edit, move and delete tasks.</p><RouterLink to="/board">Try it</RouterLink></div>
  </div>
</template>