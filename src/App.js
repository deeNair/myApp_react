
import './App.css';
import Main from './components/Main';
import {useState,useEffect} from "react";
import { getNews } from './services/newsApi';
function App() {
  const[news,setNews]=useState([]);

 // console.log("fetching");
 useEffect(() => {
  const fetchData = async () => {
    const data =  await getNews("ca");
    console.log(data);
    setNews([data]);
  };
  fetchData();
}, []);

const [formData, setFormData] = useState({searchTerm: ""});

const handleChange=(e)=>{
   setFormData({...formData,[e.target.name]:e.target.value});
   }

   const handleSubmit = async (e) =>{
    e.preventDefault();
      
      const data= await getNews(formData.searchTerm);
      console.log(data);
      setNews([data]);
   }

  return (
    <div className="App">
       <Main news={news} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} getnews={getNews} setNews={setNews}/>
    </div>
  );
}

export default App;
