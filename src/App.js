import FormPizzas from './Components/Form/Form';
import Pizzas from './Components/Pizzas/Pizzas';

import {useState} from 'react';
import './App.css';

function App() {

  const[formOculto,setFormOculto]=useState(true);
  const[ocultarPizzas,setOcultarPizzas]=useState(true);
 

  return (
    <main className="mt-5 d-flex flex-column align-items-center">
          <h1>PIZZERIA</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-warning" type="button" onClick={()=>{setOcultarPizzas(false);setFormOculto(true)}}>Mostrar Pizzas</button>
          <button className="btn btn-success" type="button" onClick={()=>{setFormOculto(false);setOcultarPizzas(true)}}>Cargar nueva Pizza</button>
          
      </div>
    
     {formOculto === false? 
      <section className='w-100 d-flex flex-column align-items-center'>
      <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>setFormOculto(true)}>X</button>
        <FormPizzas/>
      </section>:''}

      {ocultarPizzas === false? 
        <section className='w-100 d-flex flex-column align-items-center'>
        <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>setOcultarPizzas(true)}>X</button>
          <Pizzas />
        </section>:''}


    </main>
  );
}

export default App;