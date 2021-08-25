<template>
  <q-page class="column q-pa-lg page" id="fullscreen-wrapper">
    <q-banner v-if="isSupported" class="bg-positive text-white">
      The Full Screen API is supported in your browser
    </q-banner>
    <q-banner v-else class="bg-negative text-white">
      The Full Screen API is not supported in your browser 🥺
    </q-banner>
    <h1>FullScreen Browser API</h1>
    <p>
      Have you ever wanted or needed to make either some or part of a page/app
      fill the user's screen? Think of the fullscreen experience of a
      videoplayer, or an app that needs more real-estate on the user's screen -
      how might you support that?
    </p>
    <p>
      You <em>could</em> instruct the user to hit some function keys to bring
      their browser into full screen mode - but that's not a great experience!
      It requires considerations for different browsers, operating systems, and
      only makes the whole page full screen 🙅🏼. If only there were a better way
      🤔!
    </p>

    <h2>Enter the browser API</h2>
    <p>
      As of late 2019, most major browsers support the `FullScreen API`. This
      API makes it possible to present desired content using the user's entire
      screen, removing all browser user interface elements and other
      applications from the screen until full-screen mode is shut off.
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"
        >The fullscreen API</a
      >
      contains several methods, event handlers, properties, etc - however the
      main ones that we'll focus on here are:
    </p>

    <ul>
      <li>requestFullscreen</li>
      <li>exitFullscreen</li>
      <li>fullScreenEnabled</li>
    </ul>

    <p>
      Clicking the button below will demo what this looks like (note that it
      doesn't look super super pretty, because the styling doesn't take full
      screen into consideration)
    </p>
    <q-btn @click="toggleFullScreen">Make the whole page full screen</q-btn>

    <h2>In practice: Demos</h2>

    <section>
      <h4>Making a DOM element full screen</h4>
      <demo-panel :js="exampleJS1" :markup="exampleMarkup1">
        <template v-slot:explainer>
          <p>
            It's actually pretty simple to make DOM elements full screen! There
            are two main steps:
          </p>
          <ul>
            <li>Target the element</li>
            <li>Ask it to go full screen 🙏</li>
          </ul>
        </template>
        <q-card id="fullscreen-wrapper-1">
          <q-card-section>
            <h2 class="q-ma-sm">This is a card</h2>
            <p>If we wanted, this card could be full screen</p>
            <p>Don't let your dreams be dreams!</p>
            <q-img
              src="@/assets/dreams.gif"
              alt="Shia Lebouf losing his shit"
              class="shia"
            />
          </q-card-section>
          <q-card-actions>
            <q-btn @click="toggleFullScreenCard">{{
              cardIsFullScreen
                ? `Escape Full Screen`
                : `Make this card full
          screen`
            }}</q-btn>
          </q-card-actions>
        </q-card>
      </demo-panel>
    </section>
  </q-page>
</template>

<style lang="sass" scoped>
#fullscreen-wrapper-1
  max-width: 500px

  &:fullscreen
    .q-card
      height: 90vh

#fullscreen-wrapper:fullscreen
  overflow-y: auto
  flex-wrap: nowrap

.page
  background: white

.scroller
  height: 100vh

.shia
  height: 300px
  max-width: 500px
  display: block
</style>

<script lang="ts">
import { defineComponent } from "vue";

import DemoPanel from "../components/DemoPanel.vue";
import { exampleMarkup1, exampleJS1 } from "./fullScreen";

export default defineComponent({
  name: "FullScreen",
  components: {
    DemoPanel,
  },
  data() {
    return {
      cardIsFullScreen: false,
      exampleMarkup1,
      exampleJS1,
    };
  },
  setup() {
    return {
      isSupported: document.fullscreenEnabled,
    };
  },
  methods: {
    toggleFullScreenCard() {
      if (!this.cardIsFullScreen) {
        document.getElementById("fullscreen-wrapper-1")?.requestFullscreen();
        this.cardIsFullScreen = true;
      } else {
        document.exitFullscreen();
        this.cardIsFullScreen = false;
      }
    },
    toggleFullScreen() {
      document.getElementById("fullscreen-wrapper")?.requestFullscreen();
    },
  },
});
</script>
