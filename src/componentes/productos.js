import React, { Component } from 'react';
import { Button,Table } from 'react-bootstrap';
import '../App.css'

class Productos extends Component
{
    
    render()
    {
        return(
            <div className="productos">
                <h3>PRODUCTOS</h3>
          <Table>
  <thead>
    <tr>
      <th>codigo</th>
      <th>descripcion</th>
      <th>imagenes</th>
      <th>precio</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    {
      this.props.productosLista.map((a,index)=>
    <tr key={index}>
      <td>{a.codigo}</td>
      <td>{a.descripcion}</td>
      <td><img style={{height: '10vh', alignitems: 'center'}} src={a.url} className="Logo" alt="logo" /></td>
      <td>{a.precio}</td>
      <td>{<Button variant="success"onClick={()=>this.props.agregar(a)}>Success</Button>} </td>
    </tr>)
   }
  </tbody>
</Table>
            </div>
            
        );
    }
}
export default Productos;