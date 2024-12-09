var quotes = [
    '"The greatest thing you\'ll ever learn is just to love and be loved in return."  Moulin Rouge',
    '"May the Force be with you." Star Wars',
    '"You can\'t handle the truth!"  A Few Good Men',
    '"Here\'s looking at you, kid."  Casablanca',
    '"I\'ll be back." The Terminator'
];

document.getElementById('change-quote-btn').addEventListener('click', () => {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').textContent = randomQuote;
});
var movieRecommendations = [
    "Inception - A mind-bending thriller by Christopher Nolan",
    "The Matrix - A groundbreaking sci-fi classic",
    "Pulp Fiction - A Tarantino masterpiece",
"The Godfather - The iconic mafia film",
    "The Dark Knight - One of the best superhero films ever made"
];

document.getElementById('random-movie-btn').addEventListener('click', () => {
    var randomMovie = movieRecommendations[Math.floor(Math.random() * movieRecommendations.length)];

    document.getElementById('recommended-movie').textContent = randomMovie;
});
