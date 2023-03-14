//import area
import React, { useEffect } from 'react'


//definetion area
function Home() {
    //2.1 hooks area

    //every hooks is a function 
    useEffect(()=>{
        fetch('http://localhost:1337/api/business-categories')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data)
        })
        .catch(()=>{})
    },[])

    //2.2 function definetion arae




    //2.3 return statments
  return (
    <main>
        <ul className='box nav'>
            <li ><img src ='https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=48&q=75' alt=''/><br/>Restaurants</li>
        </ul>
    </main>
  )
}

export default Home