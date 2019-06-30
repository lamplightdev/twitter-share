import template from './twitter-share-template.mjs';

class TwitterShare extends HTMLElement {
  connectedCallback() {
    this.render(
      [...this.attributes].reduce((all, attr) => {
        return {
          ...all,
          [attr.nodeName]: attr.nodeValue
        };
      }, {})
    );
  }

  render(props) {
    this.innerHTML = template(props);

    const a = this.querySelector('a');
    a.addEventListener('click', this.open);
  }

  open(event) {
    event.preventDefault();

    const a = event.target;
    const w = 600;
    const h = 400;
    const x = (screen.width - w) / 2;
    const y = (screen.height - h) / 2;
    const features = `width=${w},height=${h},left=${x},top=${y}`;

    window.open(a.getAttribute('href'), '_blank', features);
  }
}

customElements.define('twitter-share', TwitterShare);
