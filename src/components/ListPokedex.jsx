import React from "react";
import { useState, useContext, useEffect } from "react";
import { PokedexContext } from "../context/PokedexContext";
import Table from "react-bootstrap/Table";
import TablePoke from "./TablePoke";
import { TbPokeball } from "react-icons/tb";
import Genmodal from "./Genmodal";

function ListPokedex() {
  const { listpoke, info, handChange, busqueda } = useContext(PokedexContext);
  /* const [gen, setGen] = useState([

  ]) 
  useEffect(() => {
   setGen(  [  {
    "idgen":1,
    "name":"Kanto",
    "inicio":1,
    "fin":151,
    
  },
  {
    "idgen":2,
    "name":"Johto",
    "inicio":152,
    "fin":251,
    
  }])
   }, []); */
  //console.log(gen)
  let gen = [
    {
      idgen: 1,
      name: "Kanto",
      inicio: 1,
      fin: 151,
      mostrar:false
    },
    {
      idgen: 2,
      name: "Johto",
      inicio: 152,
      fin: 251,
      mostrar:true
    },
    {
      idgen: 3,
      name: "Hoen",
      inicio: 252,
      fin: 386,
      mostrar:true
    },
  ];
  return (
    <div className=" bg-gray-800">
      <div className="flex">
      <Genmodal gen={gen}/>
        <input
          type="text"
          id="website-admin"
          className="rounded-none rounded-r-lg bg-gray-800 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nº Pokedex o Nombre"
          value={busqueda}
          onChange={handChange}
        />
      </div>
      
      <TablePoke gen={gen[0]} />
      <TablePoke gen={gen[1]} />
      <TablePoke gen={gen[2]} />
    </div>
  );
}

export default ListPokedex;
