function Single({name,color}){
   return (
        <div className="div"
        >
            <button
            className="spc" 
            style={{
        backgroundColor: {color},
      }}
            >{name}</button>
        </div>
    )
}
export {Single};