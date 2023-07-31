import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PokedexContext } from "../context/PokedexContext";
import { useContext, useState, useEffect } from "react";
import "../data/tipospoke.css";
function InfoPokemonNav({ infopoke, Atras, Siguiente  }) {
    
  return (
    <div>
      <h1 className={`superiorPagePoke `}>
        
        <span className={`namePokePage type${infopoke[0]?.types[0].type.name}`}>{infopoke[0]?.name}</span>
        <span className={` type${infopoke[0]?.types[0].type.name}`}><a href="">{Atras?.name}</a></span>
        <span className={` type${infopoke[0]?.types[0].type.name}`}><a href="">{Siguiente?.name}</a></span>
      </h1>
      
      <br />
    </div>
  );
}

export default InfoPokemonNav;
