function Newsdisplay(props){
   const{news}=props;
   return(
      <div>
         <p>Author :{news[0].author}</p>
          <p>Title :{news.title} </p> 
          <p>Description :</p>
      </div>
   )
}
export default Newsdisplay;