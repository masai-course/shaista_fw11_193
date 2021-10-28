import "./card.css"
export const Card =({date,logo,heading,subheading,color,devices})=>{
    return (
        <div className="total" style={{backgroundColor:`${color}`}}>
            <div className="fl" >{date}</div>
               
                <div className="flt2"><img src={logo} alt="" /></div>
            <div className="flt">
                 
                <div className="case">case study</div>
                <h1>{heading}</h1>
                <h1>{subheading}</h1>
                  <img className="flt2" src="https://maxcdn.icons8.com/Share/icon/Arrows/right_filled1600.png" alt="arrow" />
                <h3>{devices}</h3>
              
            </div>
        </div>
    )
}