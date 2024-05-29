import { reactive } from 'vue';
let myMovieList = reactive({
    moviePopular:[],
    movieTop:[],
    movieSearch:[],
    userSearch: null
})
export default myMovieList