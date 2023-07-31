import React from "react";
import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import { Link } from "react-router-dom";

function TablePoke(props) {
  const { listpoke, info, handChange, busqueda } = useContext(PokedexContext);
  //console.log(props.gen.fin)

  return (
    <div className="overflow-x-auto relative primeragen bg-gray-800 text-white p-4 rounded-md">
      <>
        <h3>
          {" "}
          {props.gen.idgen} Generacion {props.gen.name}
        </h3>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="border border-slate-600 ... py-3 px-6">ID</th>
              <th className="border border-slate-600 ... py-3 px-6">Nombre</th>
              <th className="border border-slate-600 ... py-3 px-6">Tipos</th>
              <th className="border border-slate-600 ... py-3 px-6">Sprits</th>
            </tr>
          </thead>
          <tbody>
            {listpoke.map((task, i) =>
              task.id >= props.gen.inicio && task.id <= props.gen.fin ? (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {task.id}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <a
                      href={"/hola/"+task.name}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {task.name}
                    </a>
                  </td>
                  {task.types[1]?.type.name ? (
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="object-none object-left-top inline-block"
                        height="auto"
                        width="auto"
                        src={eval(`info.type${task.types[0].type.name}.imagen`)}
                        alt=""
                      />
                      <img
                        className="object-none object-right-top inline-block"
                        height="auto"
                        width="auto"
                        src={eval(`info.type${task.types[1].type.name}.imagen`)}
                        alt=""
                      />
                    </td>
                  ) : (
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                    >
                      <img
                        src={eval(`info.type${task.types[0].type.name}.imagen`)}
                        alt=""
                      />
                    </td>
                  )}

                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={task.sprites.front_default} />
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </>

      {/* {props.gen ==1 ?(<h1>Hola</h1>):( )} */}
    </div>
  );
}

export default TablePoke;
