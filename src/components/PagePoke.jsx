import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import CartPoke from "./CartPoke";
import Loading from "./Loading";
import InfoPokemonNav from "./InfoPokemonNav";
import { PokedexContext } from "../context/PokedexContext";
import { useContext } from "react";
function PagePoke() {
  let params = useParams();
  const [infopoke, setinfopoke] = useState([]);
  //let infopoke=[];
  const [loadind, setLoadind] = useState(false);
  const { listpoke, info } = useContext(PokedexContext);
  const Atras = listpoke.find((element) => element.id == infopoke[0]?.id - 1);
  const Siguiente = listpoke.find(
    (element) => element.id == infopoke[0]?.id + 1
  );

  useEffect(() => {
    showData();
  }, []);
  const cambiarstado = () => {
    setLoadind(true);
    setTimeout(() => {
      setLoadind(false);
    }, 500);
  };
  const showData = async () => {
    cambiarstado();
    fetch("https://pokeapi.co/api/v2/pokemon/" + params.pokeId)
      .then((response) => response.json())
      .then((data) => {
        setinfopoke((state) => [...state, data]);
      });
  };

  return (
    <div>
      {loadind != true ? (
        <div className="parent">
          <div className="div1 navpoke">
            <InfoPokemonNav
              infopoke={infopoke}
              Atras={Atras}
              Siguiente={Siguiente}
            />
          </div>
          <div className="div2 infopo">
          <h3 ><span className="headerPagePoke">asdsa</span></h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
          </div>
          <div className="div3 cardpoke">
            {" "}
            <CartPoke infopoke={infopoke} Atras={Atras} Siguiente={Siguiente} />
          </div >
          <div className="div4 evoluciones"> 
          <h3 ><span className="headerPagePoke">asdsa</span></h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
          </div>
          <div className="div5"> 
          <h3 ><span className="headerPagePoke">asdsa</span></h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
          </div>
          <div className="div6"> </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PagePoke;
