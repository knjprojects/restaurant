//importing out utilities from redux toolkiits
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



//v3
export const youtubeApi = createApi({
    //name of api, reducer path
    reducerPath: 'youtubeApi',
    //we also need a function call for baseQuery
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://youtube-v31.p.rapidapi.com',
        //endpoints woill be added to our base query to get the charts etc
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '4dbc6fc3e0mshf8d6ef2f69cd271p16f0f3jsn3ca073a064c0');
            headers.set('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');
            //we will move our headers to environment variabkles
            return headers;
        }
        //autonatic call back function
    }),
    //now we declare our endpiunts that  require a builder prop
    endpoints: (builder) => ({
        //this is called as a hook in redu toolkiot
        getNewVideos: builder.query({
            //query is an arrow function that return s a string
            query: () => '/search?part=snippet&q=new'
        }),
        //write our other queries here
    }),

});
export const {
    //always write use infront of your endpoint names
    useGetNewVideos,
} = youtubeApi;