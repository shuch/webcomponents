class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = '<p>this is custom element<p>';
    console.log('constructor', shadowRoot);
  }

  static get observedAttributes() {
    return ['title'];
  }

  connectedCallback() {
    console.log('connectedCallBack');
  }


  attributeChangedCallback(name, oldV, newV) {
    console.log('attributeChangedCallback', name, oldV, newV);
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
}

customElements.define('my-element', MyElement);