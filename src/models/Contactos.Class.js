


import { typeConectado } from './typeConectado';

export class ContactosClass  {
    
    
    nombre="";
    apellido="";
    email="";
    conectado=typeConectado.desconectado;
    
     constructor(nombre,apellido,email,conectado)
    {
           this.nombre=nombre;
           this.apellido=apellido;
           this.email=email;
           this.conectado=conectado;
    }
    
  
        


    }
    