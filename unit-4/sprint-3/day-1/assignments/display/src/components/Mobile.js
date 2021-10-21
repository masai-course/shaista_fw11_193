import "./mobile.css"

function Mobile({head,l1,l2,l3,l4}){
    return (
        <div className="cls">
        <h1>{head}  </h1>
        <ui>
            <li className="sqr">{l1}</li>
            <li>{l2}</li>
            <li>{l3}</li>
            <li className="crl">{l4}</li>
        
        </ui>
          </div>
    );
}
export {Mobile};