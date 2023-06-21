import './Card.css';;

export default function Card({info}) {

    const eliminarPizza=async()=>{
 
         await  fetch("http://localhost:4000/eliminarPizzaBody", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ "nombre": info.nombre })
          })
            .then(respuesta => respuesta.json())
            .then(data => console.log(data))
            .catch(error => console.log("HAY UN ERROR!!" +error))
       
    }

    return(
        <div className="card bg-secondary text-white" >
            <div className="card-body">
                <h5 className="card-title">{info.nombre}</h5>
                    <ul className='list-group list-group-flush my-2'>
                        <li className='list-group-item bg-secondary'>precio :<strong>{info.precio}</strong> </li>
                        
                    </ul>
                <div className='d-flex justify-content-between align-items-center ' >
                    <button className="btn btn-danger btn-eliminar me-2" onClick={()=>eliminarPizza()}>Eliminar Pizza</button>               
                </div>   

            </div>
        </div>

    )
}
