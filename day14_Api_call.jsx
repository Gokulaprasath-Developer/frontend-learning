import React, { useEffect, useState } from "react";

export default function ApiCallOne() {

    const [data, setdata] = useState([])
    const [count,setcount] = useState(0)
    const handlefetch = async () => {
        let resp = await fetch("https://fakestoreapi.com/products")
        let dataa = await resp.json()
        setdata(dataa)
        console.log(dataa);
    }
    useEffect(()=>{
        handlefetch();
        return()=>{
            console.log('task done');
        }
    },[count])

    const handleadd = ()=>{
        setcount(count+1)
    }



    return (
        <div>
            <button onClick={handleadd}>add</button>
            <h1 className="zeze">ZEZE</h1>

            <div className="cdewrap">
                {data.map((dat, i) => (
                    <div className="cde">
                        <img src={dat.image} height={150} width={150} />
                        <h1>{dat.title}</h1>
                        <h3>Price: {dat.price}</h3>
                    </div>
                ))}
            </div>

        </div>
    )

}
