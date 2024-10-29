/* eslint-disable react/prop-types */
import Button from "../../component/Button"


function GelleryItems(props) {

  let { image, name, category_name } = props.dataItem;
  return (
     <div>
        <img className="w-full h-60 object-cover" src={image} alt="logo" />
      <h3 className="text-2xl font-bold p-3 ">{name.toUpperCase()}</h3>
      <span className="block pl-2 font-bold">{category_name}</span>
        <Button className="px-8 py-3 border-green-700 bg-red-300 inline-block mb-6 mt-3 ml-2">Click now</Button>
      </div>
  )
}

export default GelleryItems