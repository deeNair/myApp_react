export const getNews = async (searchterm) =>{
    try {

    const response=await fetch(`https://newsapi.org/v2/top-headlines?country=${searchterm}&apiKey=1e3f0dd7e91746c59e2280c5db7930cc
    `);
    const data=await response.json();
    return data;
        
    } catch (error) {
        console.error(error);
    }

}