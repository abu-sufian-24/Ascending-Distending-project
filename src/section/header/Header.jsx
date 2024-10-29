/* eslint-disable react/prop-types */
import Button from "../../component/Button"
import Search from "./Search"


function Header(props) {

  let searchHendler = (text) => {
   props.onSearch(text);
    
  }

      return (
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-4 sm:mb-0">
        <Button onClick={() => props.onAscending()} className="btn-secondary w-full sm:w-auto">Ascending</Button>
        <Button onClick={() => props.onDescending()} className="btn-secondary ml-0 sm:ml-3 w-full sm:w-auto mt-2 sm:mt-0">Descending</Button>
      </div>

      <Search onSearch={searchHendler} />
    </div>

  )
}

export default Header