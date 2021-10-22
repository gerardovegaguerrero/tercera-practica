import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table } from 'react-bootstrap';
import Header from './componentes/header';
import Productos from './componentes/productos';
import Listado from './componentes/listado';


class App extends Component 
 {
  constructor() {
    super();
    this.state = {
    carrito:[],
    total:0,
    productosLista:[
    {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
    {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
    {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
    {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
    {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
    {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
    ],
    };
    } 
   enviar=(a)=>
   {
   let producto=this.state.carrito.find(e=>e.codigo===a.codigo);
   let temporal_carrito=this.state.carrito;
   let temporal;

   if(producto!==undefined)
   {
     temporal=
     {
     cantidad:producto.cantidad+1,
     codigo:a.codigo,
     descripcion:a.descripcion,
     precio:a.precio
    }
    temporal_carrito=this.state.carrito.filter(e=>e.codigo!==a.codigo)

   }else
   {
     temporal=
     {
       cantidad:1,
       codigo:a.codigo,
       descripcion:a.descripcion,
       precio:a.precio
     }
   }

   this.setState
   ({
   
   carrito:[...temporal_carrito,temporal],
   total:this.state.total+a.precio
   })
  
   }


   eliminar=(f)=>
   {
    let producto=this.state.carrito.find(e=>e.codigo===f.codigo);
    let temporal_carrito=this.state.carrito;
    let temporal;
 
    if(producto.cantidad>1)
    {
      temporal=
      {
      cantidad:producto.cantidad-1,
      codigo:f.codigo,
      descripcion:f.descripcion,
      precio:f.precio
     }
     temporal_carrito=this.state.carrito.filter(e=>e.codigo!==f.codigo)
     this.setState
     ({
     carrito:[...temporal_carrito,temporal],
     total:this.state.total-f.precio
     })
 
    }else
    {
      temporal_carrito=this.state.carrito.filter(e=>e.codigo!==f.codigo)
      this.setState
      ({
      carrito:[...temporal_carrito],
      total:this.state.total-f.precio
      })
     
    }
   }
   eliminacion_total=()=>
   {
     this.setState({carrito:[],
    total:0
    })
   }

   render(){
  return (
    <div className="App">
      <Header/>
      <div className="diseño">
      <Productos
      agregar={this.enviar}
      productosLista={this.state.productosLista}
      />
    <Listado
    lista={this.state.carrito}
    total={this.state.total}
    eliminar={this.eliminar}
    eliminaciontotal={this.eliminacion_total}
    
    />
    </div>
    </div>
  );
}
}

export default App;
