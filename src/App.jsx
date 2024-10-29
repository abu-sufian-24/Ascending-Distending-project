import Layout from './layout/Layout'
// import { useState } from 'react';

function App() {
  
  // let [listItems, setListItems] = useState([]);

 
  // let generateListItems = () => {
  //   let newItems = [];
  //   for (let i = 0; i <= 1000; i++) {
  //     newItems.push(`This is li ${i}`);
  //   }
  //   setListItems(newItems); 
  // };

  return (
    <Layout/>


    // <div>
    //   <button onClick={generateListItems}>Generate List</button>
    //   <ul>
    //     {listItems.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>
    // </div>
    
  );
}

export default App;


