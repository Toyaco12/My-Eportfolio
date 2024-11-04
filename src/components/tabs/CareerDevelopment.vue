<template>
  <div class="career-page bg-gradient-to-b from-secondary via-accent to-primary min-h-screen p-12 flex flex-col items-center">
    <div class="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 w-full max-w-7xl mb-12">
      <section class="career-card bg-primary shadow-2xl rounded-xl p-12 col-span-1 md:col-span-2 z-10 transition-all duration-500 transform" @mouseover="focusCard('internships')" @mouseleave="unfocusCard('internships')" ref="internshipsCard">
        <h2 class="text-5xl font-semibold text-gray-100 mb-8">Internships</h2>
        <div class="internship-details mb-12">
          <h3 class="text-4xl font-bold text-accent mb-6">Airbus Helicopters (June 2023)</h3>
          <p class="text-lg text-gray-200 leading-relaxed mb-6">
            Role: Assistant Product Owner at Airbus Helicopters, Digital Transformation Service.
          </p>
          <p class="text-base text-gray-200 leading-relaxed mb-8">
            Responsibilities: Assisted in the development of a web application using Agile methodology and the SAFE framework. Participated in non-regression tests, set up internal procedures, created JIRA dashboards, and reviewed the user manual.
          </p>
          <a :href="internshipReportLink" target="_blank" class="btn-link bg-accent text-white px-8 py-3 rounded-lg shadow-lg hover:bg-secondary transition-transform transform hover:scale-105 mb-12">
            View Internship Report
          </a>
        </div>
        <div class="internship-details mb-12">
          <h3 class="text-3xl font-bold text-accent mb-6">LIA (Laboratory of Computer Science of Avignon) (June 2024)</h3>
          <p class="text-base text-gray-200 leading-relaxed mb-6">
            Project: Exploration of LLM language models for low-resource languages.
          </p>
          <p class="text-base text-gray-200 leading-relaxed mb-8">
            Objectives: Conduct a state-of-the-art review and pilot experiments on underrepresented languages, such as Amerindian languages. Work supervised by Juan-Manuel Torres.
          </p>
        </div>
      </section>

      <div class="links bg-primary shadow-lg rounded-xl p-6 flex flex-col items-center z-0 transition-all duration-500 transform h-auto text-center" @mouseover="focusCard('links')" @mouseleave="unfocusCard('links')" ref="linksCard">
  <h3 class="text-3xl font-bold text-gray-100 mb-6">Connect with Me</h3>
  <div class="icons flex gap-8 justify-center">
    <a :href="cvLink" target="_blank" class="flex flex-col items-center text-gray-200 hover:text-accent transition-transform transform hover:scale-110">
      <i class="fas fa-file-alt text-6xl mb-2"></i>
      <span class="text-lg">CV EN</span>
    </a>
    <a :href="cvFrenchLink" target="_blank" class="flex flex-col items-center text-gray-200 hover:text-accent transition-transform transform hover:scale-110">
      <i class="fas fa-file-alt text-6xl mb-2"></i>
      <span class="text-lg">CV FR</span>
    </a>
    <a :href="linkedinLink" target="_blank" class="flex flex-col items-center text-gray-200 hover:text-accent transition-transform transform hover:scale-110">
      <i class="fab fa-linkedin text-6xl mb-2"></i>
      <span class="text-lg">LinkedIn</span>
    </a>
  </div>
</div>
    </div>

    <div class="video-section bg-secondary shadow-lg rounded-xl p-12 w-full max-w-7xl mt-12 flex flex-col items-center">
      <h2 class="text-4xl font-semibold text-gray-100 text-center mb-12">Elevator Pitch Video</h2>
      <div class="video-container w-full max-w-3xl">
        <iframe :src="videoLink" class="w-full h-64 md:h-96 rounded-lg shadow-lg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'CareerDevelopment',
  data() {
    return {
      cvLink: 'CV.pdf',
      cvFrenchLink: 'CV_French.pdf',
      linkedinLink: 'https://www.linkedin.com/in/th%C3%A9o-armaghan-3540412b7/',
      videoLink: 'https://www.youtube.com/embed/K8Ak1z18tC0',
      internshipReportLink: 'RapportStageL2_ArmaghanThéo.pdf',
      llmReportLink: '/LLM_pi.pdf',
      isCardFocused: false,
      focusedCard: null
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
.career-page {
  font-family: 'Arial', sans-serif;
}
.career-card {
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
.video-container {
  @apply w-full max-w-3xl;
}
.video-section {
  @apply bg-secondary shadow-lg rounded-xl p-12;
}
.internship-details {
  @apply mb-12;
}
</style>
