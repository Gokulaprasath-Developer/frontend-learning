import React, { useState } from "react";

function TicketBook () {
    const [count,setcount] = useState(1)

    const handleadd = () => {

    if (count==10){
        setcount(0)
    }else{
        setcount(count + 1)
    }
}

    return(
        <div>
        <h1 className="Cnt">Count -- {count}</h1>

        <button onClick={handleadd}>Add</button>
        </div>
    )
}

export default TicketBook;
