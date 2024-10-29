/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react"
import Gallery from "../section/gallery/Gallery"
import Header from "../section/header/Header"
import { useEffect } from "react";
import axios from "axios";


function Layout() {


  let [data, setData] = useState([]);
  let [searchText, setSearchText] = useState('');
  useEffect(() => {
    async function getData() {
      let respose = await axios.get('https://course.divinecoder.com/food/random/12');
      setData(respose.data);
      
    }
    getData()
  }, []);

   if (data.length == 0) return <div className=" w-full min-h-screen flex justify-center items-center">
    <progress className="progress w-56"></progress>
  </div>


  let ascendingHandler = () => {
    setData(item => {
     return item.toSorted((a, b) => a.name.localeCompare(b.name))
   })
   
  } 

   let descenDingHandler = () => {
     setData(item => {
       return item.toSorted((a, b) => b.name.localeCompare(a.name));
     });
   
  }

  // let searchHendeler = (text) => {
  //   setSearchText(text);
    
    
  // }
  
  
  return (
    
    <div className="w-full  bg-slate-100 pt-10 ">
      <div className="max-w-7xl mx-auto p-8 sm:p-5 rounded shadow">
        <Header onSearch={(text) => setSearchText(text)} onAscending={ascendingHandler} onDescending={descenDingHandler} />

        <Gallery dataItem={
           data.filter(item => {
                return item.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              })
            } />
      </div>
      </div>
     
   
    
  )
}

export default Layout