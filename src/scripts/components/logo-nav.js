class LogoNavbar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({ mode: "open"
        });
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            :host {
                font-size: 1.5em;
                font-weight: bold;
                color: white;
            }
            :host span {
                margin-left: 50px;
            }
            </style>
            <span>MEBALIH MOVIE</span>
        `;
    }
}

customElements.define("logo-nav", LogoNavbar);