import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EmailSending from "../views/EmailSending.vue"
import SmsSending from "../views/SmsSending.vue"
import EmailReports from "../views/EmailReports.vue"
import ModalComponent  from "../components/ModalTemplate.vue"

const routes = [
  {
    path: "/",
    alias: ['/home', '/home2'],
    name: "Home",
    component: Home,
  },
  {
    path: "/sendEmail",
    name: "SendEmail",
    component: EmailSending,
  },
  {
    path: "/sendSms",
    name: "SendSms",
    component: SmsSending,
  },
  {
    path: "/sendReports",
    name: "SendReports",
    component: EmailReports,
  },
  {
    path: "/modalTemplate",
    name: "modalTemplate",
    component: ModalComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
