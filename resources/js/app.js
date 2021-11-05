import {createApp} from 'vue'
import Alpine from "alpinejs"

const app = createApp({});
app
    .mount('#app');

window.Alpine = Alpine
Alpine.start()
