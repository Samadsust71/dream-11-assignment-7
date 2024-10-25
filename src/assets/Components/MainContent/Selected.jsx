

const Selected = ({selected,handleRemovePlayer}) => {
    const {playerId,name,image}=selected
  return (
    
     <div>
         <div className="flex justify-between items-center bg-base-200 p-4 rounded-xl my-6">
        <div className="flex items-center gap-2">
            <img src={image} alt={name} className="h-10 w-10 rounded-2xl"/>
            <h3 className="text-black font-bold">{name}</h3>
        </div>
        <button onClick={()=>handleRemovePlayer(playerId)} className="btn btn-error">delete</button>
      </div>
     </div>
    
  )
}

export default Selected
