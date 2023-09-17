const filmSlider = document.querySelector(".film-slider");

class Movie {
    constructor (title, img) {
        this.title = title;
        this.img = img;
    }
}

const movieList = [
    new Movie("Avatar", "avatar.jpg"),
    new Movie("Fast & Furious", "fast-and-furious.jpg"),
    new Movie("John Wick 3", "johnWickNeon.webp"),
    new Movie("Tenet", "tenet.jpg"),
    new Movie("Uncharted", "uncharted.jpg"),
];

window.addEventListener("load", () => {
    displayMovieList(movieList);
    const panels = document.querySelectorAll(".panel");
    panels[0].classList.add("active");
        panels.forEach((panel) => {
            panel.addEventListener("click", () => {
                removeActiveClasses();
                panel.classList.add("active");
            });
        });

        const removeActiveClasses = () => {
            panels.forEach((panel) => {
                panel.classList.remove("active");
            });
        };
});

const displayMovieList = (list) => {
    for(let i=0; i < list.length; i++) {
        let panel = `
        <div class="panel panel-hover" style="background-image: url(${list[i].img});">
            <h3>${list[i].title}</h3>
        </div>`;
        filmSlider.insertAdjacentHTML("beforeend", panel);
    }

}



