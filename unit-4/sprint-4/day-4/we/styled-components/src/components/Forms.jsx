export default function Forms({children}){
    return <form
    style ={{border:"1px sloid blue",
     borderRadius: "5%", 
     marginTop:10,width:"30%",
     padding:"2%",alignItems:"center"}}
    
    >
    
    
    {children}
    </form>;
}