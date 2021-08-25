<template>
  <h3>Markup</h3>
  <code-highlight language="html">
    {{ markup }}
  </code-highlight>

  <h3>JS</h3>
  <code-highlight language="javascript">
    {{ js }}
  </code-highlight>
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
  },
  components: {
    CodeHighlight,
  },
});
</script>
