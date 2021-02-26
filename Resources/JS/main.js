
if (document.getElementById("button")) {
    let button = document.getElementById("button");

    button.onclick = event => {
        document.getElementById("post").innerHTML += '<div id="inline-flex"><h1>Hello World</h1></div>'
    };
}

//Adding Mouse Over and Mouse Out DOM events to the dombox of Mind.html.
if (document.getElementsByClassName("dombox")[0]) {
    let boxes = document.getElementsByClassName("dombox");
    const boxMouseOver = event => {
        let tS = event.currentTarget.style;
        tS.backgroundColor = "turquoise";
        tS.width = "200px";
        tS.height = "200px";
    };
    const boxMouseOut = event => {
        let tS = event.currentTarget.style;
        tS.backgroundColor = "Dodgerblue";
        tS.width = "100px";
        tS.height = "100px";
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
        let tS = event.currentTarget.style;
        tS.backgroundColor = "Dodgerblue";
        tS.color = "white";
        tS.padding = "80px";

    };
    const mainMouseOut = event => {
        let tS = event.currentTarget.style;
        tS.backgroundColor = "white";
        tS.color = "black";
        tS.padding = "20px 40px";
    };
    mainText.onmouseout = mainMouseOut;
    mainText.onmouseover = mainMouseOver;
};
