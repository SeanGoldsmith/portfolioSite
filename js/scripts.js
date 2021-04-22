function showProject(projectName) {
    let topSection = document.getElementById("top-section");
    let bottomSection = document.getElementById("bottom-section")
    let banner = document.getElementById("banner");
    let container = document.getElementById(projectName);
    container.style.display="block";
    scrollToHash(projectName);
    topSection.style.display="none";
    bottomSection.style.display="none";
    banner.style.display="none";
}

function scrollToHash(hash) {
    location.hash = "#" + hash;
}

function backToTop(projectName) {
    let topSection = document.getElementById("top-section");
    let bottomSection = document.getElementById("bottom-section");
    let banner = document.getElementById("banner");
    topSection.style.display="block";
    bottomSection.style.display="block";
    banner.style.display="block";
    let container = document.getElementById(projectName);
    container.style.display="none";
    scrollToHash("project");
}