let githubButton = document.querySelector(".githubLink");
let emailButton = document.querySelector(".emailLink");
let linkedinButton = document.querySelector(".linkedinLink")


githubButton.onclick = function() {
    window.open("https://github.com/Kanataaa", "_blank");
}

linkedinButton.onclick = function() {
    window.open("https://www.linkedin.com/in/junyu-johnny-chen-301417218/", "_blank");
}

emailButton.onclick = function() {
    window.open("mailto:chenjohnnymain@gmail.com");
}