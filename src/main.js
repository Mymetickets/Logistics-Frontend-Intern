import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import SelectBox from "./components/ui/SelectBox.vue";
import InputBox from "./components/ui/InputBox.vue";
import CustomButton from "./components/ui/CustomButton.vue";
import RadioButton from "./components/ui/RadioButton.vue";
import CheckBox from "./components/ui/CheckBox.vue";
import Card from "./components/ui/Card.vue";
import NavBar from "./components/pages/layout/Navbar.vue";

import { createPinia } from "pinia";

const app = createApp(App)
  .component("SelectBox", SelectBox)
  .component("InputBox", InputBox)
  .component("CustomButton", CustomButton)
  .component("Card", Card)
  .component("RadioButton", RadioButton)
  .component("Checkbox", CheckBox)
  .component("NavBar", NavBar);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
