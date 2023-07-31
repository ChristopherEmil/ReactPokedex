import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PokedexContext } from "../context/PokedexContext";
import { useContext, useState, useEffect } from "react";
import "../data/tipospoke.css";

function CartPoke({ infopoke, Atras, Siguiente }) {
  const { listpoke, info } = useContext(PokedexContext);

  var peso = [
    infopoke[0]?.weight
      .toString()
      .slice(0, infopoke[0]?.weight.toString().length - 1),
    ",",
    infopoke[0]?.weight.toString().slice(-1).toUpperCase(),
  ].join("");
  var altura = [
    infopoke[0]?.height
      .toString()
      .slice(0, infopoke[0]?.height.toString().length - 1),
    ",",
    infopoke[0]?.height.toString().slice(-1).toUpperCase(),
  ].join("");

  return (
    <div>
      <div
        className={`card bg-black rounded-lg type${infopoke[0]?.types[0].type.name}`}
      >
        <h1>{infopoke[0]?.name}</h1>
        <div className="image">
          <img
            src={infopoke[0]?.sprites.front_default}
            alt={infopoke[0]?.name}
            className="bg-white rounded"
          />
        </div>
        <div className="Nacional">
          <span>
            <a
              href={"/hola/" + Atras?.name}
              className="  text-black dark:text-blue-500 hover:underline"
            >
              <AiOutlineArrowLeft /> {Atras?.name}
            </a>
            ---{infopoke[0]?.id} ---
            <a
              href={"/hola/" + Siguiente?.name}
              className=" text-black dark:text-blue-500 hover:underline "
            >
              {Siguiente?.name}
              <AiOutlineArrowRight />
            </a>
          </span>
        </div>
        <div className="datos bg-white ">
          <table className="border-red-300">
            <tbody>
              <tr>
                <th>Tipos</th>
                {infopoke[0]?.types[1]?.type.name ? (
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="object-none object-left-top inline-block"
                      height="auto"
                      width="auto"
                      src={eval(
                        `info.type${infopoke[0]?.types[0].type.name}?.imagen`
                      )}
                      alt=""
                    />
                    <img
                      className="object-none object-right-top inline-block"
                      height="auto"
                      width="auto"
                      src={eval(
                        `info.type${infopoke[0]?.types[1].type.name}?.imagen`
                      )}
                      alt=""
                    />
                  </td>
                ) : (
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    <img
                      src={eval(
                        `info.type${infopoke[0]?.types[0].type.name}?.imagen`
                      )}
                      alt=""
                    />
                  </td>
                )}
              </tr>

              <tr>
                <th>Habilidad</th>
                <td>
                  {infopoke[0]?.abilities[0]?.is_hidden != true
                    ? infopoke[0]?.abilities[0]?.ability.name
                    : ""}{" "}
                  <br />
                  {infopoke[0]?.abilities[1]?.is_hidden != true
                    ? infopoke[0]?.abilities[1]?.ability.name
                    : ""}
                  <br />
                  {infopoke[0]?.abilities[2]?.is_hidden != true
                    ? infopoke[0]?.abilities[2]?.ability.name
                    : ""}
                </td>
              </tr>

              {infopoke[0]?.abilities[0]?.is_hidden != false ||
              (infopoke[0]?.abilities[1]?.is_hidden &&
                infopoke[0]?.abilities[1]?.is_hidden != false) ||
              (infopoke[0]?.abilities[2]?.is_hidden &&
                infopoke[0]?.abilities[2]?.is_hidden != false) ? (
                <tr>
                  <th>Hab. Oculta</th>
                  <td>
                    {infopoke[0]?.abilities[0]?.is_hidden != false
                      ? infopoke[0]?.abilities[0]?.ability.name
                      : ""}

                    {infopoke[0]?.abilities[1]?.is_hidden != false
                      ? infopoke[0]?.abilities[1]?.ability.name
                      : ""}

                    {infopoke[0]?.abilities[2]?.is_hidden != false
                      ? infopoke[0]?.abilities[2]?.ability.name
                      : ""}
                  </td>
                </tr>
              ) : (
                ""
              )}

              <tr>
                <th>Peso</th>
                <td>{peso} Kg</td>
              </tr>
              <tr>
                <th>Altura</th>
                <td>{altura} M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartPoke;
