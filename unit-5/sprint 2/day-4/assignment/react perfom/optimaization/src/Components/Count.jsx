
import React from "react";
 const Count = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });



    return (
        <>
        
        <h2>Counter </h2><h1> Count: {count}</h1>
        </>
    )

}
export const Counter = React.memo(Count);


