const movieContainer = document.querySelector(".movie-container");

class MovieCard {
    constructor (title, content, img) {
        this.title = title;
        this.content = content;
        this.img = img;
    }
}

const movieCards = [
    new MovieCard("Demon Slayer","The adventures of Tanjiro Kamado, who wants to become a demon hunter after his family is murdered and the little girl Nezuko is raised a demon....", "deamon-slayer.jpg"),
    new MovieCard("Arcane","The tale of the birth of two legendary champions in the midst of fierce conflict between the rich and glittering city of Piltover and the dark underworld of Zaun....", "arcane.jpg"),
    new MovieCard("Rick & Morty","The adventures of alcoholic scientist Rick and his grandson Morty, who divide their time between family life and interdimensional travel...", "rick-and-morty.jpg"),
    new MovieCard("Spider-man: Into the Spider-Verse","The son of a police officer father and a dedicated mother, Miles struggles to adjust to his new school.", "spider-verse.jpg"),
];

window.addEventListener("load", () => {
    displayMovieCard(movieCards);
});

const displayMovieCard = (list) => {
    for(let i=0; i < list.length; i++) {
        let card = `
        <div class="movie-card">
                <div class="img" style="background: url(${list[i].img}) center center / cover;"></div>
                <div class="movie-content">
                    <h3>${list[i].title}</h3>
                    <p>${list[i].content}</p>
                    <button>Watch Now</button>
                </div>
            </div>`;
        movieContainer.insertAdjacentHTML("beforeend", card);
    }

}