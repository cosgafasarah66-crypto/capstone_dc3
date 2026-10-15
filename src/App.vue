<template>
  <nav class="nav">
    <strong>TaskFlow</strong>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/requirements">Requirements</RouterLink>
    <RouterLink to="/guide">Build guide</RouterLink>
    <RouterLink to="/board">Task board</RouterLink>
  </nav>
  <main class="page">
    <RouterView />
  </main>
</template>