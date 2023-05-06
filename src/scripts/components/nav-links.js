class NavbarLinks extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
            :host ul{
                padding-inline: 4rem;
                display: flex;
                gap: 2rem;
            }

            :host li {
                display: inline-block;
            }
            
            :host a {
                font-size: 18px;
                font-weight: 400;
                text-decoration: none;
                color: white;
            }
            
            :host a:hover {
                color: var(--secondary-color);
            }

            </style>

            <ul>
            <li><a href="">Beranda</a></li>
            <li><a href="">Film</a></li>
            <li><a href="">Tentang Kami</a></li>
            </ul>

        `;
    }
}

customElements.define("nav-links", NavbarLinks);