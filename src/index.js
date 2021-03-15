console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    dogImages();
    dogBreeds();
})

function dogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function addImage(picUrl) {
    const container = document.getElementById("dog-image-container");
    const newImage = picUrl;
    container.appendChild(newImage);
}

function dogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
        const breeds = Object.keys(results.message);
        addBreeds(breeds);
    });
}

function addBreeds() {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innterText = breed;
        ul.appendChild(li);
        li.addEventListener("click", function(event) {
            event.target.style.color = "orange";
        });
    });

}