import React from "react";

export const Calender =({date,memo})=>{
    console.log(`${memo ? "yes":"no"}`)
return(
    <div>
    Date is :{date}
    
    </div>
)
}
export const MemoisCal = React.memo(Calender, (prevProps,nextProps) => {
    return prevProps.date === nextProps.date
} )
;