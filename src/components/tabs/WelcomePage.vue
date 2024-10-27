<template>
  <div class="welcome-page bg-gradient-to-b from-secondary via-accent to-primary min-h-screen p-12 flex flex-col items-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl mb-12">
      <!-- Main Profile Section -->
      <div class="profile-card bg-primary shadow-2xl rounded-xl p-12 col-span-1 md:col-span-2 z-10 transition-all duration-500 transform" @mouseover="focusCard('profile')" @mouseleave="unfocusCard('profile')" ref="profileCard">
        <div class="profile-image-container flex justify-center">
          <img :src="profileImage" alt="Profile Picture" class="profile-image w-48 h-48 rounded-md object-cover border-4 border-gray-400" />
        </div>
        <div class="text-center mt-10">
          <h1 class="text-5xl font-extrabold text-gray-100">{{ introTitle }}</h1>
          <p class="mt-8 text-gray-200 leading-relaxed text-xl">{{ introText }}</p>
        </div>
      </div>

      <!-- Hobbies Section -->
      <div class="hobbies bg-primary shadow-lg rounded-xl p-12 z-0 transition-all duration-500 transform" @mouseover="focusCard('hobbies')" @mouseleave="unfocusCard('hobbies')" ref="hobbiesCard">
        <h2 class="text-4xl font-semibold text-gray-100 text-center mb-8">My Interests & Hobbies</h2>
        <ul class="flex flex-wrap justify-center gap-6">
          <li v-for="hobby in hobbies" :key="hobby" class="bg-accent text-white px-8 py-4 rounded-full shadow-md">
            {{ hobby }}
          </li>
        </ul>
      </div>
      <!-- LinkedIn and CV Section -->
    </div>

    <!-- More About Me Section -->
    <div class="more-about-me bg-primary shadow-lg rounded-xl p-12 z-0">
      <h2 class="text-4xl font-semibold text-gray-100 text-center mb-8">More About Me</h2>
      <p class="text-gray-200 leading-relaxed text-xl">{{ aboutMeText }}</p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: "WelcomePage",
  data() {
    return {
      profileImage: "Theo.png",
      introTitle: "Welcome to My E-Portfolio!",
      introText: "Hello! I'm Théo Armaghan, an engineering student passionate about technology, sustainability, and innovation.",
      linkedInUrl: "https://www.linkedin.com/in/theo-armaghan", // Replace with your LinkedIn URL
      cvUrl: "/CV.pdf", // Update with your CV file path
      hobbies: ["Traveling", "Gaming", "Coding", "Sports", "Chess"],
      videoUrl: "https://youtube.com/", // Replace with your video URL
      aboutMeText: "I am currently a first year engineering student at ENSEEIHT. My interests lie in IA, software development, and sustainable technologies. I enjoy collaborating on innovative and opensource projects and am always eager to learn new skills. Feel free to contact me on LinkedIn or via email if you would like to connect or collaborate!",
    };
  },
  methods: {
    focusCard(card) {
      if (this.isCardFocused && this.focusedCard === card) return;
      this.isCardFocused = true;
      this.focusedCard = card;
      anime({
        targets: this.$refs[`${card}Card`],
        scale: 1.15,
        zIndex: 20,
        boxShadow: '0 30px 40px rgba(0, 0, 0, 0.3)',
        duration: 500,
        easing: 'easeOutQuad'
      });
      // Blur other cards
      this.blurOtherCards(card);
    },
    unfocusCard(card) {
      if (this.focusedCard !== card) return;
      this.isCardFocused = false;
      anime({
        targets: this.$refs[`${card}Card`],
        scale: 1,
        zIndex: 10,
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
        duration: 500,
        easing: 'easeOutQuad'
      });
      // Remove blur from other cards
      this.unblurOtherCards();
    },
    blurOtherCards(focusedCard) {
      Object.keys(this.$refs).forEach(ref => {
        if (ref !== `${focusedCard}Card`) {
          anime({
            targets: this.$refs[ref],
            filter: 'blur(5px)',
            duration: 500,
            easing: 'easeOutQuad'
          });
        }
      });
    },
    unblurOtherCards() {
      Object.keys(this.$refs).forEach(ref => {
        anime({
          targets: this.$refs[ref],
          filter: 'blur(0px)',
          duration: 500,
          easing: 'easeOutQuad'
        });
      });
    }
  }
};
</script>

<style scoped>
.welcome-page {
  font-family: 'Arial', sans-serif;
}
.profile-image-container {
  @apply flex justify-center;
}
.profile-image {
  @apply w-48 h-48 rounded-md object-cover border-4 border-gray-400;
}
.profile-card {
  @apply bg-primary shadow-2xl rounded-xl p-12;
  transition: transform 0.0s ease-in-out;
}
.links {
  @apply bg-primary shadow-lg rounded-xl p-12 flex flex-col items-center;
  transition: transform 0.0s ease-in-out;
}
.btn-link {
  @apply text-white px-10 py-5 rounded-lg shadow-lg hover:transition-transform transform hover:scale-105;
}
.hobbies {
  @apply bg-primary shadow-lg rounded-xl p-12;
  transition: transform 0.0s ease-in-out;
}
.hobbies ul {
  @apply flex flex-wrap justify-center gap-6;
}
.hobbies li {
  @apply bg-accent text-white px-8 py-4 rounded-full shadow-md;
}
.content-section {
  @apply w-full;
  max-width: 800px;
}
.content-block {
  @apply mb-8;
  padding: 1rem;
  background-color: theme('colors.secondary');
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: theme('colors.gray.100');
}
.more-about-me {
  @apply bg-primary shadow-lg rounded-xl p-12;
  max-width: 800px;

}
.video-container {
  @apply w-full max-w-3xl;
}
</style>
