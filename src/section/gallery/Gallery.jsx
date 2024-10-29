import GelleryItems from "./GelleryItems"




function Gallery(props) {

  
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">

      {props.dataItem.map((item) => {
        return <GelleryItems key={item.id} dataItem={item} />
        
      })}
      
      
     
      
    </div>
    
    
    

  )
}

export default Gallery