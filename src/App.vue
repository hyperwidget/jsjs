<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Just Some JS
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list bordered separator>
        <q-item>
          <q-item-section>
            <router-link to="fullscreen">Fullscreen API </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutDefault",

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
