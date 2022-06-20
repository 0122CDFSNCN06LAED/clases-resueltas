window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const movieId = urlParams.get("movieId");

    if (movieId) {
        //Estamos editando
    } else {
        //Estamos creando
    }
};
