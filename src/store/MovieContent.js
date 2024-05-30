import { reactive } from 'vue';
let myMovieList = reactive({
    moviePopular:[],
    movieTop:[],
    movieSearch:[],
    tvSeriesSearch:[],
    userSearch: null,
    userSelect: "",
    userTitle :"",
    userVote :"",
    userPreview :"",
    magic: "invisible"
})
export default myMovieList