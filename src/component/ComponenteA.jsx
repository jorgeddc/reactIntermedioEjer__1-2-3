import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './ComponenteB';
import { ContactosClass } from '../models/Contactos.Class';
import { typeConectado } from '../models/typeConectado';




const conexion = () => {
 
 const contactosDefault = new ContactosClass
  ("Jorge",
    "Diaz-Delgado",
    "jorgeddc@gmail.com",
    typeConectado.desconectado);


    return (
    <div>
      <ComponenteB contacto={contactosDefault}/>
    </div>
  )
}

conexion.propTypes = {
    
}

export default conexion