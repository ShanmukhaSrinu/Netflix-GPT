

 export const NETFLIX_URL="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

 export const NETFLIX_BACKGROUND_SRC="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"

 export const NETFLIX_BACKGROUND_SRCSET="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_small.jpg 959w"

 export const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY ,
  }
};

export const GETNOWPLAYINGMOVIES="https://api.themoviedb.org/3/movie/now_playing?page=1"

export const  IMG_CDN_URL="https://image.tmdb.org/t/p/w500"

export const GETPOPULARMOVIES="https://api.themoviedb.org/3/movie/popular?page=1"

export const GETTOPRATEDMOVIES="https://api.themoviedb.org/3/movie/top_rated?page=1"

export const GETUPCOMINGMOVIES="https://api.themoviedb.org/3/movie/upcoming?page=1"

export const  SUPPORTED_LANGUAGES=[
  {identifier:"en",name:"English"},
  {identifier:"telugu",name:"Telugu"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"tamil",name:"Tamil"},
  {identifier:"japanese",name:"Japanese"}
]

export const GETINSTRGRAM="https://www.instagram.com/mr.shannu555/"
export const GETLINKEDIN="www.linkedin.com/in/shanmukha-srinu-lanka"
 export const PROFILEIMAGE = "https://avatars.githubusercontent.com/u/199047837?v=4";


 