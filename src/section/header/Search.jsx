/* eslint-disable react/prop-types */


// import { useState } from "react"


function Search({onSearch}) {

  // let [text, setText] = useState('');

  // let keyUpHandler = (e) => {
  //   setText(e.target.value);
    
  // }
  // onSearch(text);


    return (
      <label onKeyUp={(e)=> onSearch(e.target.value)} className="input  input-bordered flex items-center">
    <input type="text" className="grow sm:max-w-[70%] w-full" placeholder="Search" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70">
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd" />
    </svg>
  </label>
  )
}

export default Search