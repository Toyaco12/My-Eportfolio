<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled, 'navbar-reduced': isScrolled }">
    <div class="container">
      <div class="brand-logo">
        <router-link to="/welcome" class="logo-link nav-item">
          <i class="fas fa-home"></i> My E-Portfolio
        </router-link>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
      <ul :class="['nav-links', { 'active': isMenuOpen }]">
        <li>
          <router-link to="/welcome" class="nav-item" :class="{ 'active-link': $route.path === '/welcome' }">
            <i class="fas fa-home"></i> Welcome
          </router-link>
        </li>
        <li>
          <router-link to="/engineering-course" class="nav-item" :class="{ 'active-link': $route.path === '/engineering-course' }">
            <i class="fas fa-book"></i> Engineering Course
          </router-link>
        </li>
        <li>
          <router-link to="/international-mobility" class="nav-item" :class="{ 'active-link': $route.path === '/international-mobility' }">
            <i class="fas fa-globe"></i> International Mobility
          </router-link>
        </li>
        <li>
          <router-link to="/sustainability" class="nav-item" :class="{ 'active-link': $route.path === '/sustainability' }">
            <i class="fas fa-leaf"></i> Sustainability & Civic Engagement
          </router-link>
        </li>
        <li>
          <router-link to="/sport-activities" class="nav-item" :class="{ 'active-link': $route.path === '/sport-activities' }">
            <i class="fas fa-basketball-ball"></i> Sport & Other Activities
          </router-link>
        </li>
        <li>
          <router-link to="/career-development" class="dropdown-toggle nav-item" :class="{ 'active-link': $route.path.startsWith('/career-development') }">
            <i class="fas fa-briefcase"></i> Career Development
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";

.navbar {
  @apply w-full text-gray-900 py-6 bg-primary shadow-md;
  position: sticky;
  top: 0;
  z-index: 50;
  border-radius: 0px;
  background-clip: padding-box;
  margin: 0;
  transition: all 0.5s ease;
}
.navbar-scrolled {
  max-width: 100%;
  margin: 0;
  border-radius: 15px;
  transition: all 0.5s ease;
}
.navbar-reduced {
  @apply py-3;
  transform: scale(0.9);
}
.container {
  @apply flex justify-center items-center w-full mx-auto;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: all 0.5s ease;
}
.brand-logo {
  @apply flex items-center;
  margin-right: 2rem;
  transition: all 0.5s ease;
}
.brand-logo .logo-link {
  @apply text-accent text-2xl font-bold;
  transition: all 0.5s ease;
}
.logo-link i {
  @apply mr-2;
  transition: all 0.5s ease;
}
.menu-toggle {
  @apply text-white text-xl md:hidden;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
}
.nav-links {
  @apply flex gap-16 items-center;
  @apply md:flex hidden;
  flex-direction: row;
  background-color: transparent;
  width: auto;
  padding: 0;
  box-shadow: none;
  transition: transform 0.3s ease;
}
.nav-links.active {
  @apply block;
}
.nav-item {
  @apply text-white hover:text-accent transition-colors duration-300;
  white-space: nowrap;
  transition: all 0.5s ease;
}
.nav-links i {
  @apply mr-2;
  transition: all 0.5s ease;
}
.nav-item.active-link {
  @apply text-accent;
}
</style>
