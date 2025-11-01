function createElement(type, ...classNames) {
    const element =  document.createElement(type);
    element.classList.add(...classNames);

    return element;
}

function addChild(parent, childType, ...childClassNames) {
    const child = createElement(childType, ...childClassNames);
    parent.appendChild(child);
}
