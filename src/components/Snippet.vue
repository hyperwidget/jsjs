<template>
  <template v-if="markup">
    <h3>Markup</h3>
    <code-highlight language="html">
      {{ markup }}
    </code-highlight>
  </template>

  <template v-if="js">
    <h3>JS</h3>
    <code-highlight language="javascript">
      {{ js }}
    </code-highlight>
  </template>

  <template v-if="css">
    <h3>CSS</h3>
    <code-highlight language="css">
      {{ css }}
    </code-highlight>
  </template>
</template>

<script lang="ts">
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";

import "vue-code-highlight/themes/prism-tomorrow.css";
import "vue-code-highlight/themes/window.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Snippet",
  props: {
    markup: String,
    js: String,
    css: String,
  },
  components: {
    CodeHighlight,
  },
});
</script>
