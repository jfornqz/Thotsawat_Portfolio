import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/pages/Main.vue";
import Contact from "@/pages/Contact.vue";
const routes = [
  { path: "/", name: "profile", component: Profile },
  { path: "/contact", name: "contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
