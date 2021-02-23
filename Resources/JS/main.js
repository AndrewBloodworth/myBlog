
if (document.getElementById("button")) {
    let button = document.getElementById("button");

    button.onclick = event => {
        document.getElementById("post").innerHTML += '<div id="inline-flex"><h1>Hello World</h1></div>'
    };
}

let boxes = document.getElementsByClassName("dombox");

const boxMouseOver = event => {
    let targetStyle = event.currentTarget.style;
    targetStyle.backgroundColor = "turquoise";
    targetStyle.width = "200px";
    targetStyle.height = "200px";
}
const boxMouseOut = event => {
    let targetStyle = event.currentTarget.style;
    targetStyle.backgroundColor = "Dodgerblue";
    targetStyle.width = "100px";
    targetStyle.height = "100px";
}
for (let i=0; i<boxes.length;i++) {
    let box = boxes.item(i);
    box.onmouseover = boxMouseOver;
    box.onmouseout = boxMouseOut;
}
