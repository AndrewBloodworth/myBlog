
if (document.getElementById("button")) {
    let button = document.getElementById("button");

    button.onclick = event => {
        document.getElementById("post").innerHTML += '<div id="inline-flex"><h1>Hello World</h1></div>'
    };
}

//Adding Mouse Over and Mouse Out DOM events to the dombox of the Mind page.
if (document.getElementsByClassName("dombox")[0]) {
    let boxes = document.getElementsByClassName("dombox");
    const boxMouseOver = event => {
        let targetStyle = event.currentTarget.style;
        targetStyle.backgroundColor = "turquoise";
        targetStyle.width = "200px";
        targetStyle.height = "200px";
    };
    const boxMouseOut = event => {
        let targetStyle = event.currentTarget.style;
        targetStyle.backgroundColor = "Dodgerblue";
        targetStyle.width = "100px";
        targetStyle.height = "100px";
    };
    for (let b in boxes) {
        let box = boxes.item(b);
        box.onmouseover = boxMouseOver;
        box.onmouseout = boxMouseOut;
    };
};


//Adding Mouse Over and Mouse Out DOM events to the Main-Text of the Banner

if (document.getElementsByClassName("main-text")[0]) {
    let mainText = document.getElementsByClassName("main-text")[0];
    const mainMouseOver = event => {
        let targetStyle = event.currentTarget.style;
        targetStyle.backgroundColor = "black";
        targetStyle.color = "white";
        console.log("Hello");
    };
    const mainMouseOut = event => {
        let targetStyle = event.currentTarget.style;
        targetStyle.backgroundColor = "white";
        targetStyle.color = "black";
    };
    mainText.onmouseout = mainMouseOut;
    mainText.onmouseover = mainMouseOver;
};



