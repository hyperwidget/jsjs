export const exampleMarkup1 = `
<!-- 
  Most of this markup isn't necessary - the important part here is
  the id or selector of the dom element you want to target
 -->
<div class="card" id="fullscreen-wrapper-1">
  <div class="card-section">
    <h2>This is a card</h2>
    <p>If we wanted, this card could be full screen</p>
    <p>Don't let your dreams be dreams!</p>
    <img
      src="shia"
      alt="Shia Lebouf losing his shit"
    />
  </div>
  <div class="card-actions">
    <div class="btn" @click="toggleFullScreenCard">
      {{
        cardIsFullScreen
        ? 'Escape Full Screen'
        : 'Make this card full screen'
      }}
    </div>
  </div>
</div>`;

export const exampleJS1 = `
// select the element
// call the requestFullScreenMethod
// profit in full screen!
document.getElementById("fullscreen-wrapper-1")?.requestFullscreen();

// To exit full screen the user can hit the 'esc' key
// but we can also programatically exit full screen
document.exitFullscreen()
`;

export const exampleMarkup2 = `
<q-banner v-if="isSupported" class="bg-positive text-white">
  The Full Screen API is supported in your browser
</q-banner>
<q-banner v-else class="bg-negative text-white">
  The Full Screen API is not supported in your browser 🥺
</q-banner>
`;

export const exampleJS2 = `
// checking to see if fullscreen is enabled on the document
isSupported = document.fullscreenEnabled
`;

export const exampleMarkup3 = `
<div class="card">
  <h2>This is a card</h2>
  <p class="red">It has different colours</p>
  <p class="blue">
    But golly it looks weird at full screen,
  </p>
  <p class="purple">What's goin' on!?</p>
  <img
    src="/img/butwhy.7afb1195.gif"
  />
</div>
`;

export const exampleMarkup4 = `
<div class="card">
  <h2>This is a card</h2>
  <p class="red">It has different colours</p>
  <p class="blue">
    But golly it looks weird at full screen,
  </p>
  <p class="purple">What's goin' on!?</p>
  <img
    src="/img/butwhy.7afb1195.gif"
  />
</div>
`;

export const exampleCSS4 = `
.card:fullscreen {
  background: white;
}
`;

export const codeSnip1 = `
:not(:root):fullscreen::backdrop {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: black;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: black;
}
`;
