import { createApp } from 'vue';
import App from './App.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import AphroditeLib from '../src/entry.esm.ts';

const app = createApp(App);
app.use(AphroditeLib);

app.mount('#app');
