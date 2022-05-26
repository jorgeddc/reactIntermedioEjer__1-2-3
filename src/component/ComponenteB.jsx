import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContactosClass } from '../models/Contactos.Class'
import { typeConectado } from '../models/typeConectado'


const ComponenteB = ({contacto}) => {

  const [login, setlogin] = useState(true)
  
  const handleDisconecting = () =>{
       setlogin(typeConectado.desconectado) 
  
  }
  const handleConecting = () =>{
    setlogin(typeConectado.conectado) 

}
    return (
    <div>
       
        
               { login ?
       (   <> 
        <h1> { contacto.nombre } </h1>
        <h2> { contacto.apellido }</h2>
        <hr />
        <h3> {contacto.email } 
        </h3><button onClick={handleDisconecting}> Disconecting </button></>        
      ):(<button onClick={handleConecting}> Conecting </button>)
      
      }
            
            
 {}
    </div>
  )
}

ComponenteB.propTypes = {
    contacto:PropTypes.instanceOf(ContactosClass)
}

export default ComponenteB