<template>
  <div class="project-list">
    <h1>Mes Projets</h1>
    <ul>
      <li v-for="project in projects" :key="project._id">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    // Appel à l'API pour récupérer les projets depuis MongoDB
    fetch('http://localhost:3000/api/projects')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des projets:', error);
      });
  }
};
</script>

<style scoped>
.project-list {
  font-family: Arial, sans-serif;
}
</style>
