
if (document.getElementById("button")) {
    let button = document.getElementById("button");

    button.onclick = event => {
        document.getElementById("post").innerHTML += '<div id="inline-flex"><h1>Hello World</h1></div>'
    };
}

let boxes = document.getElementsByClassName("dombox");

const boxMouseOver = event => {
    event.currentTarget.style.backgroundColor = "turquoise";
}
const boxMouseOut = event => {
    event.currentTarget.style.backgroundColor = "Dodgerblue";
}
for (let i=0; i<boxes.length;i++) {
    let box = boxes.item(i);
    box.onmouseover = boxMouseOver;
    box.onmouseout = boxMouseOut;
}
