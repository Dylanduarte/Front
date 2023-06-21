import{useEffect, useState} from 'react';
import Card from '../Card/Card';
import './Pizzas.css'


    export default function Pizzas() {
    let [datos,setDatos]=useState([]);
  
   
    const traerInfo=async()=>{
 
        let info= await fetch("http://localhost:4000/pizzas")
                        .then(respuesta => respuesta.json())
                        .then(data => setDatos(data))
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }
    useEffect(()=>{
        traerInfo() 
     
     },[])
    return(
        <div className='section-cards d-flex justify-content-center flex-wrap'>
            {datos.map((dato)=>{ 
                return <Card key={dato.id} info={dato}/>
            })} 
        </div>
    )
}