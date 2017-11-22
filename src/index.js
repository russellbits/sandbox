import _ from 'lodash'

// Adding a comment to see if webpack is watching.

const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().

function component() {

  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element

}

// Use custom elements API v1 to register a new HTML tag and define its JS behavior
// using an ES6 class. Every instance of <fancy-tab> will have this same prototype.
customElements.define('fancy-tabs', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

    // Attach a shadow root to <fancy-tabs>.
    const shadowRoot2 = this.attachShadow({mode: 'open'});
    shadowRoot2.innerHTML = `
      <style>#tabs { ... }</style> <!-- styles are scoped to fancy-tabs! -->
      <div id="tabs">
        <slot id="tabsSlot" name="title"></slot> <!-- named slot -->
      </div>
      <div id="panels">
        <slot id="panelsSlot"></slot>
      </div>
    `;
  }
});

document.body.appendChild(shadowRoot)
document.body.appendChild(component())
