import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let [city,setCity]=useState('')
  let [wDetails,setWDetails]=useState()
  let getData=(event)=>{
   fetch ("https://dummyjson.com/products/categories")
   .then((res)=>res.json())
   .then((finRes)=>{
    console.log(finRes)
    setWDetails(finRes)
   })
   event.preventDefault()
   setCity('')
  }
  return (
    <div className='w-[100%] h-[100vh] bg-[#4aacb1] text-center'>
      <div className='max-w[1320px] max-auto'>
        <h1 className='text-[40px] font-bold py-[50px] text-white'>Simpel Weather app</h1>

        <form onSubmit={getData}>
          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='w-[300px] h-[40px] pl-3' placeholder='City Name'/>
          <button className='bg-[brown] mr-4 p-[10px] '>Submit</button>
        </form>
        <div className='w-[400px] max-auto bg-white shadow-lg mt-[40px] p-[25px]'>

          {wDetails !==undefined
          ?
          <>
          <h3 className='font-bold text-[30px] '>Jaipur <span className='bg-[yellow]'>IN</span></h3>
          <h2 className='font-bold text-[40px] '>9.62oc</h2>
          <img src="http://openweathermap.org/img/w/50d.png"/>
          <p>Fog</p>
          </>
          :
          "No Data"
          }
         
        </div>
      </div>
    
    </div>
  );
}

export default App;
