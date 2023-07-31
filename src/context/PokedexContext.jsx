import { createContext } from "react";
//import { tasks as data } from "../tasks";
import { info as data } from "../data/tipospoke";
import React, { useState, useEffect } from "react";
export const PokedexContext = createContext();

export function PokedexContextProvider(props) {
  const [listpoke, setListpoke] = useState([]);
  const [listpoke1, setListpoke1] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(data);
    showData();
  }, []);
  const showData = async () => {
    for (let i = 1; i < 386; i++) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((response) => response.json())
        .then((data) => {
          setListpoke((state) => [...state, data]);
          setListpoke1((state) => [...state, data]);
        });
    }
  };
 
  const handChange = (e) => {
    setBusqueda(e.target.value);
    filtro(e.target.value);
  };
  const filtro = (termindobusqueda) => {
    var resultadobusqueda = listpoke1.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(termindobusqueda.toLowerCase()) ||
        elemento.id
          .toString()
          .toLowerCase()
          .includes(termindobusqueda.toLowerCase())
      ) {
        //console.log(elemento.name)
        return elemento;
      }
    });
    setListpoke(resultadobusqueda);

    /*   var text = event.target.value
  const NewData = listpoke.filter((item) => {
    return item.name.toLowerCase().includes(text.toLowerCase());

}) */
    //setListpoke(NewData)
  };

  function aplicargen(){
console.group('first')
  }
  // console.log(data.typenormal)
  return (
    <PokedexContext.Provider
      value={{ listpoke, info, filtro, handChange, busqueda, aplicargen }}
    >
     {props.children}
    </PokedexContext.Provider>
  );
}
