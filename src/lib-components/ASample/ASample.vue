<template>
  <div class="aphrodite-lib-sample">
    <p>The counter was to <b></b>.</p>
    <button >
      Click +1
    </button>
    <button>
      Click -1
    </button>
    <button>
      Click +5
    </button>
    <button>
      Click -5
    </button>
    <button >
      Reset
    </button>
    <AButton age="11"></AButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AButton from '@/lib-components/AButton/AButton.vue'

@Options({
  components: {
    AButton
  }
})

export default class ASample extends Vue {}
</script>

<style scoped>
  .aphrodite-lib-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .aphrodite-lib-sample p {
    margin: 0 0 1em;
  }
</style>
