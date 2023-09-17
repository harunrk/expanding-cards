const searchButton = document.getElementById("search-button");
const searchPlace = document.getElementById("search-place");


searchButton.addEventListener("click", () => {
    if(searchPlace.classList.contains("hidden")){
        searchPlace.classList.remove('hidden');
        setTimeout(function () {
            searchPlace.classList.remove('visuallyhidden');
          }, 20);
    }
    else {
        searchPlace.classList.add('visuallyhidden');    
        searchPlace.addEventListener('transitionend', () => {
            searchPlace.classList.add('hidden');
        }, { once: true });
    }
});