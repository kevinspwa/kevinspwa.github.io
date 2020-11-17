class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Santos Gomez Cristopher Kevin`;
  }
}
customElements.define("mi-footer", MiFooter);
