import React, { Component } from 'react';
import '../App.css'
import { Button,Table } from 'react-bootstrap';
import Bote from './bote.jpg'

class Listado extends Component
{
    render()
    {
        
        return(
            <div className="Lista">
                <h3>CARRITO</h3>
                {
                    this.props.lista.length===0
                    ? <p>no hay productos</p>
                    :
                    <div>
                    <div className="carrito">
                        <p>Total:${(this.props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </p>
                        <div onClick={()=>this.props.eliminaciontotal()} ><img src={Bote} className="App-bote" /></div>
                    </div>
                    <Table>
 <thead>
    <tr>
    <th>cantidad</th>
      <th>codigo</th>
      <th>descripcion</th>
      <th>precio</th>
      <th>Importe</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    {
      this.props.lista.map((a,index)=>
    <tr key={index}>
      <td>{a.cantidad} </td>
      <td>{a.codigo}</td>
      <td>{a.descripcion}</td>
      <td>{a.precio}</td>
      <td>{(a.cantidad*a.precio)}</td>
      <td>{<Button variant="danger"onClick={()=>this.props.eliminar(a)} >eliminar</Button>} </td>
    </tr>)
   }
  </tbody>
</Table>
                    </div>
                    
                }
                
  
            </div>
            
        );
    }
}
export default Listado;