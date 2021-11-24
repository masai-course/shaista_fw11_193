
import pic1 from "../images/Stats.png"
import pic2 from "../images/Shopping.png"
import pic3 from "../images/Messages.png"
import pic4 from "../images/Files.png"
import pic5 from "../images/Settings.png"
import pic6 from "../images/Add New.png"
import pic7 from "../images/Bitmap.png"
import pc1 from "../images/pc1.png"
import pc2 from "../images/pc2.png"
import pc3 from "../images/pc3.png"
import "./theme.css";
import { useContext } from "react"
import { ThemContext } from "../contexts/ThemContext"
export const Theme = () => {
    const { color ,handleTokenChange} = useContext(ThemContext);
     
//     const handle=()=>{
//                 document.body.style.color="white"
//              handleTokenChange()
//              document.body.style.background=color
//              console.log(color)
//             }
// //     useEffect(() => {
//     handle()
//   },[ color]);
    
    return (
        
<body >
            <div className="nav" style={{ background: {color} }}>
                <div  className="one">
                    <img src={pic1} alt="" className="pic1" />
                </div>
                <img src={pic7} alt="" className="pic8" />
                <div className="pic2" style={{background:{color}}}>
                    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0485 12H2.0835V5H16.0485L18.3815 8.5L16.0485 12ZM20.4155 7.945L17.4155 3.445C17.23 3.17 16.918 3 16.5835 3H10.3335V1C10.3335 0.45 9.8855 0 9.3335 0C8.7815 0 8.3335 0.45 8.3335 1V3H1.0835C0.531496 3 0.0834961 3.45 0.0834961 4V13C0.0834961 13.555 0.531496 14 1.0835 14H8.3335V22H6.974C6.422 22 5.974 22.45 5.974 23C5.974 23.555 6.422 24 6.974 24H11.693C12.245 24 12.693 23.555 12.693 23C12.693 22.45 12.245 22 11.693 22H10.3335V14H16.5835C16.918 14 17.23 13.835 17.4155 13.555L20.4155 9.055C20.6395 8.72 20.6395 8.28 20.4155 7.945Z" fill="#B8C5D3" />
                    </svg>
                </div>
                <img src={pic5} alt="" className="pic3" />
                <img src={pic2} alt="" className="pic4" />
                <img src={pic3} alt="" className="pic5" />
                <img src={pic4} alt="" className="pic6" />
                <img src={pic6} alt="" className="pic7" />
            </div>
            <div >
                <p className="h1" >My Dashboard   </p>
                <p className="p1">Dark Mode</p>
            </div>
            <div className="move" onClick={()=>{
                document.body.style.color="white"
             handleTokenChange()
             document.body.style.background=color
             console.log(color)
            }
            
            
            }>
                <label class="switch">
                    <input type="checkbox" 
                    />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className="div1" style={{ background: {color} }}>

                <div>
                    <div className="pc1">

                        <img src={pc1} alt="" />
                        <div>
                            <p >Nrupul Dev <br /> Banglore , Indian</p>
                        </div>
                    </div>
                    <p style={{ marginTop: "95px", position: "absolute" }}>Professional Level 15</p>
                    <p className="f" style={{ marginTop: "95px", position: "absolute", marginLeft: "270px" }} >4723 Pionts</p>
                    <div className="dv">
                        <div className="cl">
                        </div>

                    </div>


                </div>
                <div className="pc2">

                    <img src={pc2} alt="" />
                    <div>
                        <p >Sandhya <br />
                            Banglore , Indian</p>
                    </div>

                </div>
                <p style={{ marginTop: "175px", position: "absolute" }}>Professional Level 11</p>
                <p className="f" style={{ marginTop: "175px", position: "absolute", marginLeft: "270px" }}>2339 Pionts</p>
                <div className="dv1">
                    <div className="cl1">
                    </div>

                </div>

                <div className="pc3">

                    <img src={pc3} alt="" />
                    <div>
                        <p >Elon Tusk <br /> California USA</p>
                    </div>



                </div>
                <p style={{ marginTop: "245px", position: "absolute" }}>Professional Level 6</p>
                <p className="f" style={{ marginTop: "245px", position: "absolute", marginLeft: "270px" }}>1884 Pionts</p>
            </div>
            <div className="dv2">
                <div className="cl2">
                </div>

            </div>
</body>
     

    );
}