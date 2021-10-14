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
const movieName = document.querySelector("h1");
const movieYear = document.querySelector("#year");
const movieDes = document.querySelector("#description");

// //get the movie titles in the select box

// function getInfo(movies) {
//   for (movie of movies) {
//     console.log(movie.title);
//     console.log(movie.description);

//     //section #display-info make sure to ge the movie title and then the description
//     const nameAndDescription = document.querySelector("#display-info");
//     const movieName = document.createElement("h1");
//     movieName.textContent = movie.title;
//     const movieDes = document.createElement("p");
//     movieDes.textContent = movie.description;
//     const display = document.querySelector("#display-info");
//     display.append(movieName);
//     display.append(movieDes);
//   }
// }

// const select = document.querySelector("select");

// document.querySelector("div").addEventListener("click", (e) => {
//   e.preventDefault();
//   const movie = e.target.value;
//   //   console.log(movie, "movie");
//   fetch("https://ghibliapi.herokuapp.com/films")
//     .then((response) => response.json())
//     .then((ghibli) => {
//       const selector = document.querySelector("#movies");
//       const movieTitle = movie[i].title;
//       //   console.log(movieTitle, "Hi");

//       selector.innerHTML = `
//         <option value="title">${movieTitle}</option>
//         `;
//     });
// });

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
