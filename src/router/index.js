import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/tabs/WelcomePage.vue';
import EngineeringCourse from '../components/tabs/EngineeringCourse.vue';
import InternationalMobility from '../components/tabs/InternationalMobility.vue';
import Sustainability from '../components/tabs/SustainabilityCivicEngagement.vue';
import SportActivities from '../components/tabs/SportActivities.vue';
import CareerDevelopment from '../components/tabs/CareerDevelopment.vue';

const routes = [
  { path: '/welcome', component: Welcome },
  { path: '/engineering-course', component: EngineeringCourse },
  { path: '/international-mobility', component: InternationalMobility },
  { path: '/sustainability', component: Sustainability },
  { path: '/sport-activities', component: SportActivities },
  { path: '/career-development', component: CareerDevelopment },
  { path: '/', redirect: '/welcome' }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
