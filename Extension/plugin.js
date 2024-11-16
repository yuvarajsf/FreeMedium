function GetCurrentMediumUrl(currentPageUrl) {
    const url = new URL(currentPageUrl);
    url.host = "readmedium.com";
    return url.href;
}


document.addEventListener("readystatechange", function(event) {
    const freeButton = document.createElement("button");
    freeButton.id = "free-button";
    freeButton.textContent = "Read Free";
    freeButton.style.position = "fixed";
    freeButton.style.bottom = "20px";
    freeButton.style.right = "20px";
    freeButton.style.padding = "10px 20px";
    freeButton.style.backgroundColor = "#000";
    freeButton.style.color = "#fff";
    freeButton.style.border = "none";
    freeButton.style.borderRadius = "48px";
    freeButton.style.fontSize = "18px";
    freeButton.style.cursor = "pointer";
    freeButton.style.zIndex = "9999";
    freeButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";

    freeButton.addEventListener("click", function() {
        const mediumUrl = GetCurrentMediumUrl(document.url);
        window.open(mediumUrl, "_blank");
    });

    document.body.appendChild(freeButton);
});