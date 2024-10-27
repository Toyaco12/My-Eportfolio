<template>
    <div class="work-in-progress flex items-center justify-center min-h-screen">
      <div class="message-container text-center flex flex-col items-center justify-center">
        <p class="text-5xl font-bold text-primary mb-6">Work in Progress</p>
        <p class="text-lg text-gray-500 mb-6">This section is under development. Please check back later!</p>
        <div class="loader mt-6"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WorkInProgressComponent',
  };
  </script>
  
  <style scoped>
  .work-in-progress {
    font-family: 'Arial', sans-serif;
  }
  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  