import { createApp } from 'vue'
import App from './App.vue'

const shadowHost: any = document.querySelector('#app');
const shadowRoot: any = shadowHost.attachShadow({ mode: 'closed' });

//import shadow from 'vue-shadow-dom'
//.use(shadow)
createApp(App).mount(shadowRoot)
// import { createApp } from 'vue'
// import wrap from '@vue/web-component-wrapper';
// import AButton from './lib-components/AButton/AButton.vue';
//
// const Vue: any = createApp(App)
// const WrappedAButton: any = wrap(Vue, AButton, createApp);
//
// window.customElements.define('a-button', WrappedAButton);
