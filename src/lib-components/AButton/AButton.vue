<template>
  <div id="shadowroot">
    <button style="background-color: green">Aphrodite button</button>
  </div>

</template>


<script lang="ts">
import { Vue } from 'vue-class-component';
// const shadowHost: any = document.querySelector('#shadowroot');
// const shadowRoot: any = shadowHost.attachShadow({ mode: 'closed' });

class AButton extends Vue {

}
console.log({AButton})
export default AButton;
</script>
