import {Fragment, useState} from 'react';


export default function FormPizzas() {
    const[mensajeOculto,setMensajeOculto]=useState(true);

    const cargarPizza=async (event)=>{
        event.preventDefault();
        const form=JSON.stringify({
            "nombre":event.target[0].value,
            "precio":event.target[1].value
         
            })
       
        const response= await fetch('http://localhost:4000/cargarpizza',{
            method:'POST',
            body:form,
            headers:{
                'Content-Type': 'application/json',
                
            }
        })
        if(response.ok){
          
            setMensajeOculto(false);
        }
    }
    return(
        <Fragment> 
        { mensajeOculto == true? 
            <form className=" w-75 mb-5"  onSubmit={(event)=>{cargarPizza(event)}} method="POST">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de Pizza</label>
                    <input type="text" className="form-control"  aria-label="titulo de la pelicula" id="nombre" name="nombre" />
                </div>
               
                
                <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio de Pizza</label>
                <input type="number" className="form-control" id="precio" name="precio" min="100"/>
            </div>
    
                <input type='file' name="imagen" id=''/>
    
                <button type="submit" className="btn btn-success" >Cargar</button>
            </form>
           :
           <div className="alert alert-dismissible alert-success mt-4">
                <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=> setMensajeOculto(true)}></button>
                <strong> Pelicula Cargada Exitosamente!</strong>
            </div> }
        </Fragment>
            
         
    )
}