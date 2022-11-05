import { createRouter, createWebHashHistory } from "vue-router";
import SimpleForm from "../views/SimpleForm.vue";
import ComponentForm from "../views/ComponentForm.vue";

const routes = [
  {
    path: "/",
    name: "SimpleForm",
    component: SimpleForm,
  },
  {
    path: "/component-form",
    name: "ComponentForm",
    component: ComponentForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
