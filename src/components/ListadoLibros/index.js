import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

export default function ListadoLibros() {
  const [listado, setListado] = useState([]);

  const fetchData = async () => {
    const respuesta = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    if (respuesta.status === 200) {
      console.log('Respuesta OK');
      setListado(respuesta.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="libros">
      <h1>Listado Libros</h1>
      <ul className="libros-list">
        {listado.map((libro) => {
          return <li className="libro-detail">{libro.name}</li>;
        })}
      </ul>
    </div>
  );
}
