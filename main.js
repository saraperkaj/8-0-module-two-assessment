//get the data

const getData = () => {
  return fetch("https://ghibliapi.herokuapp.com/films").then((ghibli) => {
    return ghibli.json();
  });
};

//Use rhe data to make dropdown menu

const select = document.querySelector("select");

getData().then((movies) => {
  for (let movie of movies) {
    const option = document.createElement("option");
    option.setAttribute("value", movie.title);
    option.textContent = movie.title;
    select.append(option);
  }
});

//when that thing is clicked display the info of that movie

const currentTitle = document.querySelector("#display_title");
const movieName = document.querySelector("#title");
const movieYear = document.querySelector("#year");
const movieDes = document.querySelector("#description");

let selectedMovie;

const displayMovieInfo = () => {
  getData().then((movies) => {
    for (let movie of movies) {
      if (select.value === movie.title) {
        selectedMovie = movie;
        // console.log(movie);
        movieName.textContent = movie.title;
        movieYear.textContent = movie.release_date;
        movieDes.textContent = movie.description;
      }
    }
  });
};

select.addEventListener("change", displayMovieInfo);

// //when you click on of the options you have to call the getInfo function to display all that jazz

// /**innerHTML when the option is clicked
//  [ ] An h3 with the movie's title appear in the ~display-info~ section of the page.
//  [ ] A p with the movie's release year.
//  [ ] A p with the description of the movie.
//  */

// /**when the submit button is clicked
// [ ] The review, inside of an li, with the name of the movie in a strong element and the text of the review afterwards.
// [ ] The review text should be cleared from the text input.
// [ ] If the user selects a different dropdown option after making the review, all of the reviews should stay where they are.

//  */
