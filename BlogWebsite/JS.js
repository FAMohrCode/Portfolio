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

// footer.js
function footerText() {
    const footerHTML = `
        <footer class="bg-slate-900 rounded-lg flex flex-col items-center justify-center py-8 gap-4 mb-0 mt-10">
            <h3>
                <b>Credits & License:</b>
            </h3>
            <div class="flex flex-col items-center justify-center py-8 gap-2">
                <div class="flex flex-col items-center justify-center">
                    <p>Create by FAMohr / Felix Adrian Mohr:</p>
                    <p>on Github: <span class="underline text-yellow-300"><a href="https://github.com/FAMohrCode" target="_blank">FAMohrCode</a></span></p>
                    <p>on YouTube: <span class="underline text-yellow-300"><a href="https://www.youtube.com/channel/UCfVrPzqPAE0sBpKRp6W4xwg" target="_blank">@TheFAMohr / FAMohr</a></span></p>
                    <p>on Discord: <span class="text-yellow-300">famohr</span></p>
                </div>
                <div>
                    <p>Begin of this Project: <span class="text-yellow-300">2024-06-20</span></p>
                    <p>Last Update: <span class="text-yellow-300">2024-06-23_13:04</span></p>
                    <p>Version: <span class="text-yellow-300">Alpha 1.2.2</span></p>
                </div>
            </div>
            <div>
                <div class="flex flex-col items-center justify-center">
                    <p>Create in: <span class="underline text-yellow-300"><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></span></p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
