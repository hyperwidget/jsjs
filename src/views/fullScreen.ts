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
