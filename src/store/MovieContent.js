import { reactive } from 'vue';
let myMovieList = reactive({
    moviePopular:[],
    movieTop:[],
    movieSearch:[],
    tvSeriesSearch:[],
    userSearch: null
})
export default myMovieList