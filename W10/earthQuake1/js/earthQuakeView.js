//  use textContent to prevent Cross-Site Scripting (XSS) attacks   https://dev.to/4myc/javascript-innerhtml-innertext-and-textcontent-ih


// handle fetch error

function updateUIFailure() {
    document.querySelector('.quakes').textContent = "Earthquake information unavailable";
}