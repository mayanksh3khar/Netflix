const API_KEY = "8bc0ce998f1ab2a58986ddbd5cafe916";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=21T`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discocer/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discocer/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discocer/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discocer/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discocer/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;