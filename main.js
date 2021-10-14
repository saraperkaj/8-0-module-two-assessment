//get the movie names in the select box

document.querySelector("div").addEventListener(click, (e) => {
    e.preventDefault();
    const movie = e.target.search.value;
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((ghibli) => {
        const selector = document.querySelector('#movies');
        const movieTitle = ghibli.[0]title;

        selector.innerHTML=
        `
        ${movieTitle}
        `
    })
});
