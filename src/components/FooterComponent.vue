<template>
    <footer class="footer">
      <div class="footer-content max-w-7xl mx-auto text-center">
        <p>&copy; 2024 Théo Armaghan. All Rights Reserved.</p>
        <p>Contact: theo12.armaghan@gmail.com</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent"
  };
  </script>
  
  <style scoped>
  .footer {
    @apply w-full bg-primary text-white py-8;
  }
  .footer-content {
    @apply max-w-7xl mx-auto;
    text-align: center;
  }
  </style>
  