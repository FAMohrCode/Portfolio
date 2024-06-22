function Main() {
    let bodyWidth = document.body.offsetWidth;
    let bodyObject = document.getElementById('allMargin');
    let nameH2 = document.getElementById('myName')
    bodyObject.style.marginLeft = 100 + "px";
    bodyObject.style.marginRight = 100 + "px";
    if (bodyWidth <= 1000) {
        bodyObject.style.marginLeft = 50 + "px";
        bodyObject.style.marginRight = 50 + "px";
    }
    if (bodyWidth <= 700) {
        bodyObject.style.marginLeft = 25 + "px";
        bodyObject.style.marginRight = 25 + "px";
        nameH2.style.fontSize = 20 + "px";
        nameH2.style.marginLeft = 10 + "px";
    }
    if (bodyWidth <= 500) {
        bodyObject.style.marginLeft = 10 + "px";
        bodyObject.style.marginRight = 10 + "px";
    }
    if (bodyWidth <= 400) {
        bodyObject.style.marginLeft = 5 + "px";
        bodyObject.style.marginRight = 5 + "px";
    }
    if (bodyWidth <= 300) {
        bodyObject.style.marginLeft = 0 + "px";
        bodyObject.style.marginRight = 0 + "px";
    }
}

setInterval(Main, 500);