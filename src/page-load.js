import picture from './free-nature-images.jpg';

function createElement(type, ...classNames) {
    const element = document.createElement(type);
    element.classList.add(...classNames);

    return element;
}

export function loadPage() {
    const content = document.querySelector("#content");

    const img = createElement("img");
    img.src = picture;
    content.appendChild(img);

    const h1 = createElement("h1");
    h1.textContent = "Heading"
    content.appendChild(h1);

    const p = createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi vitae iste illo voluptates earum veniam soluta quaerat optio, dolores voluptate. Illo impedit aspernatur officia in. Nisi consequatur hic iusto sequi."
    content.appendChild(p);
}