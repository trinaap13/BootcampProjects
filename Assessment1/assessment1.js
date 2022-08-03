const image = document.querySelector("img");
const form = document.querySelector("form");
const clearButton = document.getElementById("start-over")
const topWordsDiv = document.getElementById("top-words")
const bottomWordsDiv = document.getElementById("bottom-words")

function setImageSource() {
    const imageUrl = document.getElementById("meme-link").value;
    image.src = imageUrl;
}

function setMemeWords() {
    const topWords = document.getElementById("meme-top").value;
    topWordsDiv.append(topWords);
    const bottomWords = document.getElementById("meme-bottom").value;
    bottomWordsDiv.append(bottomWords); 
}

function clearWords() {
    topWordsDiv.innerHTML = "";
    bottomWordsDiv.innerHTML = "";
}

clearButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.reset();
        image.src = "";
        clearWords();
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault();  
    setImageSource();
    setMemeWords();
})