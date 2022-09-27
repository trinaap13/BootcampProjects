const $gifSpace = $("#gifs");
const $searchBox = $("#search");

function addGif(res) {
    const results = res.data.length;
    if (results) {
        const randomGif = Math.florr(Math.random() + results);
        const $newSpace = $("<div>");
        const $newGif = $("<img>", { src: res.data[randomGif].images.original.url });

        $newSpace.append($newGif);
        $gifSpace.append($newSpace);
    }
}

$("form").on("submit", async function (e) {
    e.preventDefault();

    const searchTerm = $searchBox.val();
    $searchBox.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" } });
    addGif(response.data);
});

$("#remove-button").on("click", function () {
    $gifSpace.empty();
});