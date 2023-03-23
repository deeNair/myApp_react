
import Searchbar from "./Searchbar";
import Newsdisplay from "./Newsdisplay";
import { getNews } from "../services/newsApi";
//import {setNews} from "./App"

function Main(props){
  
  const {news,handleSubmit,handleChange,formData}= props;
  const {getnews={getNews},setNews={setNews}}=props;
  console.log(news);


const list= news.map((el)=>{
  return(<p className="container">
    {el.articles.map((e)=>{
      return(
        <div className="news" style={{backgroundColor:"#F8EAD8"}}>
     <h3>{e.title}</h3>
     <p> Details:{e.description}</p>
      <h4>Link :<a href={e.url}>click for more </a> </h4>
      </div>)
     
    })}
  </p>);
})

    return (
   <div>
    <h1 style={{backgroundColor:"black" ,color: "white"}}>Todays Top Headlines</h1>
 
      <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} getnews={getNews} setNews={setNews} />
      
      <h4>Top news for {formData.searchTerm}</h4>
      
      <p>{list}</p>
   
    
   </div>
    )
}
export default Main;