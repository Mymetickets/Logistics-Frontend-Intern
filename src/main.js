import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import SelectBox from "./components/ui/SelectBox.vue";
import InputBox from "./components/ui/InputBox.vue";
import Button from "./components/ui/Button.vue";
import RadioButton from "./components/ui/RadioButton.vue";
import CheckBox from "./components/ui/CheckBox.vue";
import Card from "./components/ui/Card.vue";

const app = createApp(App)
  .component("SelectBox", SelectBox)
  .component("InputBox", InputBox)
  .component("CustomButton", Button)
  .component("Card", Card)
  .component("RadioButton", RadioButton)
  .component("Checkbox", CheckBox);

app.use(router);
app.mount("#app");
