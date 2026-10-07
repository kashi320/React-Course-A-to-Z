function render(reactElement, Container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    for (const p in reactElement.props) {
        if (p==='Children') continue;
        domElement.setAttribute(p,reactElement.props[p])
    }
    Container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    Children:"Click Here to Visit"
}
const mainContainer = document.querySelector("#root");

render(reactElement,mainContainer);