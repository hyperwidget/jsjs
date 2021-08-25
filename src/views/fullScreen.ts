export const exampleMarkup1 = `
<div class="card" id="fullscreen-wrapper-1">
  <div class="card-section">
      <h1>This is a full screen!</h1>
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
document.getElementById("fullscreen-wrapper-1")?.requestFullscreen();
`;
