import "./button.css"

function Button({age,url}){
    const styles ={
        color:"green",
    };
    return (
        <div id="custm">
        <img alt="test" src={url}/>
        <h1> {age}</h1>
        <div style={styles}> Text </div>
        </div>
    )

}
export {Button};