<template>
  <slot name="explainer" />

  <q-separator />
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab name="demo" label="Demo" />
    <q-tab name="source" label="Source" />
  </q-tabs>
  <q-separator />

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="demo">
      <slot />
    </q-tab-panel>

    <q-tab-panel name="source">
      <Snippet :js="js" :markup="markup" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script lang="ts">
import "vue-code-highlight/themes/prism-twilight.css";
import "vue-code-highlight/themes/window.css";
import { ref, defineComponent } from "vue";

import Snippet from "./Snippet.vue";

export default defineComponent({
  name: "DemoPanel",
  props: {
    markup: String,
    js: String,
  },
  setup() {
    return {
      tab: ref("demo"),
    };
  },
  components: {
    Snippet,
  },
});
</script>
