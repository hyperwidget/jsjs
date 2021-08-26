<template>
  <q-page class="column q-pa-lg" id="fullscreen-wrapper">
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
      <h4 class="q-mb-none">Making a DOM element full screen</h4>
      <h6 class="q-mt-sm">(and escaping full screen)</h6>
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

    <section>
      <h4>Determining if fullscreen is supported</h4>
      <demo-panel :js="exampleJS2" :markup="exampleMarkup2">
        <template v-slot:explainer>
          <p>
            Even though the fullscreen API is supported by most browsers, most
            doesn't mean all. Depending on your use cases, you may want to
            confer with
            <a href="https://caniuse.com/fullscreen">caniuse</a> before deciding
            to use it.
          </p>
          <p>
            All that said, if you want to be safe in using this API, you can
            check if the fullscreen API is available and display appropriate
            messaging otherwise.
          </p>
          <p>
            The example below uses markup from the banner at the very top of
            this page, it's in Vue to easily handle the conditional display, but
            you should be able to get the point.
          </p>
        </template>

        <q-banner v-if="isSupported" class="bg-positive text-white">
          The Full Screen API is supported in your browser
        </q-banner>
        <q-banner v-else class="bg-negative text-white">
          The Full Screen API is not supported in your browser 🥺
        </q-banner>
      </demo-panel>
    </section>

    <section>
      <h4>Styling for Full Screen</h4>
      <demo-panel :markup="exampleMarkup3">
        <template v-slot:explainer>
          <p>
            Elements that get invoked to full screen will retain their styling
            that they would have if they weren't fullsize - which is great!
            However, this can cause some semi-unexpected behaviour. Full screen
            the demo below to see the issue.
          </p>
        </template>

        <q-card id="fullscreen-wrapper-2">
          <q-card-section>
            <h2 class="q-ma-sm">This is a card</h2>
            <p class="text-red">It has different colours</p>
            <p class="text-blue">But golly it looks weird at full screen,</p>
            <p class="text-purple">What's goin' on!?</p>
            <q-img
              src="@/assets/butwhy.gif"
              alt="Someone's confused"
              class="shia"
            />
          </q-card-section>
          <q-card-actions>
            <q-btn @click="toggleFullScreenCard2">{{
              cardIsFullScreen2
                ? `Escape Full Screen`
                : `Make this card full
          screen`
            }}</q-btn>
          </q-card-actions>
        </q-card>
      </demo-panel>

      <demo-panel :css="exampleCSS4" :markup="exampleMarkup4">
        <template v-slot:explainer>
          <p>
            It turns out that browsers will put on a special psuedo selector on
            the parent element of `::backdrop` when you make a non-root element
            fullscreen. It's super possible that the element you've made
            fullscreen hasn't had an explicit background colour set. As a
            result, the background is probably transparent and you're seeing the
            backdrop's background! All your content is there, it's just hard to
            see it.
          </p>

          <p>
            For Reference, the backdrop psuedo class for chrome at time of
            writing this looks like:
          </p>

          <code-highlight language="css">
            {{ codeSnip1 }}
          </code-highlight>

          <p class="q-my-lg">
            So how do we go about fixing this? Luckily, when we select a DOM
            element to go fullscreen, it ends up being able to be targetted via
            selector with a psuedo class of :fullscreen. This means that we're
            able to select the fullscreen'd element with CSS and change our
            element's background to something that works better for us.
            Alternatively, you could always explicitly set the background colour
            of the item that you're going to make fullscreen right from the
            get-go and avoid this whole rigamarole: but where's the fun in that?
          </p>
          <p></p
        ></template>

        <q-card id="fullscreen-wrapper-4">
          <q-card-section>
            <h2 class="q-ma-sm">This is a card</h2>
            <p class="text-red">It has different colours</p>
            <p class="text-blue">
              And hot golly it looks dang good in full screen,
            </p>
            <p class="text-pink">Such a pretty page</p>
            <q-img
              src="@/assets/butwhy.gif"
              alt="Someone's confused"
              class="shia"
            />
          </q-card-section>
          <q-card-actions>
            <q-btn @click="toggleFullScreenCard4">{{
              cardIsFullScreen4
                ? `Escape Full Screen`
                : `Make this card full
          screen`
            }}</q-btn>
          </q-card-actions>
        </q-card>
      </demo-panel>
    </section>
    <section>
      <h1>References</h1>

      <p>
        And there we go, that's a full screen. Clearly I didn't come up with
        this all by myself, so here's some fun references in case the above
        isn't working as expected, or in case you want to nerd out more about
        it.
      </p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"
            >MDN</a
          >
        </li>
        <li>
          <a href="https://caniuse.com/fullscreen">Caniuse</a>
        </li>
        <li>
          <a href="https://demo.greenroots.info/web-apis/web-apis-fullscreen/"
            >This random blog - Greenroots, thanks greenroots!</a
          >
        </li>
        <li>
          <a href="https://twitter.com/fullscreenapi"
            >FullScreenAPI twitter (?)</a
          >
        </li>
        <li>
          <a href="https://fullscreen.spec.whatwg.org/"
            >The full screen spec @ whatwg</a
          >
        </li>
      </ul>
    </section>
  </q-page>
</template>

<style lang="sass" scoped>
#fullscreen-wrapper-1, #fullscreen-wrapper-4
  max-width: 500px

#fullscreen-wrapper-2
  max-width: 500px
  &:fullscreen.q-card
    background: initial

#fullscreen-wrapper:fullscreen
  overflow-y: auto
  flex-wrap: nowrap
  background: white

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
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";

import "vue-code-highlight/themes/prism-tomorrow.css";
import "vue-code-highlight/themes/window.css";

import DemoPanel from "../components/DemoPanel.vue";
import {
  exampleMarkup1,
  exampleJS1,
  exampleMarkup2,
  exampleJS2,
  codeSnip1,
  exampleMarkup3,
  exampleMarkup4,
  exampleCSS4,
} from "./fullScreen";

export default defineComponent({
  name: "FullScreen",
  components: {
    DemoPanel,
    CodeHighlight,
  },
  data() {
    return {
      cardIsFullScreen: false,
      cardIsFullScreen2: false,
      cardIsFullScreen4: false,
      exampleMarkup1,
      exampleJS1,
      exampleMarkup2,
      exampleMarkup3,
      exampleMarkup4,
      exampleCSS4,
      exampleJS2,
      codeSnip1,
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
    toggleFullScreenCard2() {
      if (!this.cardIsFullScreen2) {
        document.getElementById("fullscreen-wrapper-2")?.requestFullscreen();
        this.cardIsFullScreen2 = true;
      } else {
        document.exitFullscreen();
        this.cardIsFullScreen2 = false;
      }
    },
    toggleFullScreenCard4() {
      if (!this.cardIsFullScreen4) {
        document.getElementById("fullscreen-wrapper-4")?.requestFullscreen();
        this.cardIsFullScreen4 = true;
      } else {
        document.exitFullscreen();
        this.cardIsFullScreen4 = false;
      }
    },
    toggleFullScreen() {
      document.getElementById("fullscreen-wrapper")?.requestFullscreen();
    },
  },
});
</script>
