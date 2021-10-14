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

//add the mvie to the review list and then also gotta make what you just typed to appear

const list = document.querySelector("#written-review");
let wrote = document.querySelector("#review");

const addReview = () => {
  event.preventDefault();

  let newReview = document.createElement("li");
  let input = document.getElementById("review").value;
  // if (input) {
  // newReview.textContent = `${selectedMovie.title}: ${input}`;
  newReview.innerHTML = `<strong><b>${selectedMovie.title}</strong></b>: ${input}`;
  list.append(newReview);
  // reset();
  // } else {
  //   //review input is = to ''
  //   input = "";
  // }
};

// document.querySelector("#page").addEventListener("submit", (event) => {
//   event.target.reset();
// });

//this code has to go somewhere for it to work

//found code online that helped me basically write these lines of code simply in html ((:
// const submit = document.querySelector("#review-submit");
// submit.addEventListener("click", addReview);
