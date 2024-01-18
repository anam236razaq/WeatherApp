import { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa6";

function App(){
   const [city, setCity]=useState(null);
   const [search, setSearch]=useState("");
   

   useEffect(()=>{
      async function fetchApi(){
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d230487d839de5327eaf9a1fafc824bc&units=metric`
         const res=await fetch(url);
         const data=await res.json();
         setCity(data.main);
      } 
      fetchApi();
   }, [search]);
  return(
     <div className="main">
         <div className="heading">
            <h1>Weather APP</h1>
            <p>Stay ahead of the forecast with our intuitive weather app. Access real-time updates
               and accurate predictions for a seamless and informed outdoor experience.</p>
         </div>
       <div className="box">
          <div className="inputData">
             <input type="search" onChange={(e)=>{setSearch(e.target.value)}} value={search} />
          </div>

       {!city ? (<p className="errorMsg">No Data Found</p>): (
          <div className="info">
          <h2 className="location">
             <FaStreetView className="icon" />{search}
          </h2>
          <h1 className="temp">{city.temp}&deg; Cel</h1>
          <h3 className="tempmin-max">Min: {city.temp_min}&deg; Cel | Max: {city.temp_max}&deg; Cel</h3>
        </div>
       )}
      </div>
     </div>
  )
}
export default App;