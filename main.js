import { renderHwp } from "/hwp-viewer.js";
const container = document.getElementById("viewer");

window.loadHwpFromBase64 = function (base64) {
    renderHwp(document.getElementById("viewer"), base64);

    requestAnimationFrame(() => {
        fitA4ToViewer();
    });
};

function fitA4ToViewer() {
    const viewer = document.getElementById("viewer");
    const page = viewer.querySelector(".page");
    if (!page) return;

    const vw = viewer.clientWidth;
    const vh = viewer.clientHeight;

    const pw = page.offsetWidth;
    const ph = page.offsetHeight;

    const scale = Math.min(
        vw / pw,
        vh / ph
    );

    page.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", fitA4ToViewer);
