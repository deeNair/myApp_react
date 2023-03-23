//import { useState } from "react";

import { getNews } from "../services/newsApi";

function Searchbar(props){
    const {news,handleSubmit,handleChange,formData,getnews={getNews},setNews={setNews}}= props;
   

    return(

        <div className="sbtn">

        <form onSubmit={handleSubmit}>
            
       <input type="text" placeholder="enter a country" value={formData.searchTerm} 
           name="searchTerm" onChange={handleChange} className="search"/>

       <button type="submit" className="btn">search</button>

       </form>

       </div>
    )
}

export default Searchbar;