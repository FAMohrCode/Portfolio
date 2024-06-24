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
            <h3 class="font-bold">Credits & License:</h3>
            <div class="flex flex-col items-center justify-center py-8 gap-2">
                <div class="flex flex-col items-center justify-center">
                    <p class="Credit">Create by <span class="text-yellow-300 footerData">FAMohr / Felix Adrian Mohr</span>:</p>
                    <p class="Credit">on Github: <span class="underline text-yellow-300 footerData"><a href="https://github.com/FAMohrCode" target="_blank">FAMohrCode</a></span></p>
                    <p class="Credit">on YouTube: <span class="underline text-yellow-300 footerData"><a href="https://www.youtube.com/channel/UCfVrPzqPAE0sBpKRp6W4xwg" target="_blank">@TheFAMohr / FAMohr</a></span></p>
                    <p class="Credit">on Discord: <span class="text-yellow-300 footerData">famohr</span></p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="Credit">Begin of this Project: <span class="text-yellow-300 footerData">2024-06-20</span></p>
                    <p class="Credit">Last Update: <span class="text-yellow-300 footerData">2024-06-24_13:33</span></p>
                    <p class="Credit">Version: <span class="text-yellow-300 footerData">Alpha 1.4.2</span></p>
                    <p class="Credit">Last Upload on GitHub: <span class="text-yellow-300 footerData">2024-06-23_20:08</span></p>
                    <p class="Credit">Last Upload Version on GitHub: <span class="text-yellow-300 footerData">Alpha 1.4.2</span></p>
                </div>
            </div>
            <div>
                <div class="flex flex-col items-center justify-center">
                    <p class="Credit">Create in: <span class="underline text-yellow-300 footerData"><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></span></p>
                    <p class="Credit">Pictures from: <span class="underline text-yellow-300 footerData"><a href="https://pixabay.com/" target="_blank">Pixabay</a></span></p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function randomBanner() {
    var max = 5;
    var number = Math.floor(Math.random() * max);
    var bannerSrc;

    switch (number) {
        case 0:
            bannerSrc = "/src/IMG/Banner1.jpg";
            break;
        case 1:
            bannerSrc = "/src/IMG/Banner2.jpg";
            break;
        case 2:
            bannerSrc = "/src/IMG/Banner3.jpg";
            break;
        case 3:
            bannerSrc = "/src/IMG/Banner4.jpg";
            break;
        case 4:
            bannerSrc = "/src/IMG/Banner5.png";
            break;
    }

    document.getElementById("banner").src = bannerSrc;
}
