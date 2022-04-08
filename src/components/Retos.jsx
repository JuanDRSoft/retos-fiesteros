import React from "react";
import { retos } from "./RetosBD";

const Retos = ({ participantesHombres, participantesMujeres }) => {
  const arrayH = participantesHombres.map(
    (participante) => participante.participantesHombres
  );

  const arrayM = participantesMujeres.map(
    (participante) => participante.participantesMujeres
  );

  const arrayRetos = retos.map((reto) => reto.reto);

  const randomH = (Math.random() * arrayH.length) | 0;
  const randomM = (Math.random() * arrayM.length) | 0;
  const randomReto = (Math.random() * arrayRetos.length) | 0;

  const siguienteReto = () => {
    window.location.reload(true);
  };

  const terminarJuego = () => {
    localStorage.removeItem("participantesHombres");
    localStorage.removeItem("participantesMujeres");
    window.location.reload(true);
  };

  return (
    <div>
      <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5">
          <div className="my-10 bg-white shadow rounded-lg p-10">
            <h1 className="uppercase font-bold text-4xl flex justify-center">
              🥳 reto 🎉
            </h1>

            <div className="flex">
              <p className="font-bold capitalize mt-10 text-lg mx-auto">
                <span className="text-red-600 uppercase">
                  {arrayH[randomH]}
                </span>{" "}
                <span>{arrayRetos[randomReto]}</span>{" "}
                <span className="text-red-600 uppercase">
                  {arrayM[randomM]}
                </span>
              </p>
            </div>

            <button
              className="bg-blue-600 p-3 w-full uppercase font-bold text-white mt-5 rounded cursor-pointer hover:bg-blue-500 duration-300"
              onClick={siguienteReto}
            >
              Siguiente Reto
            </button>

            <input
              type="button"
              value="terminar juego"
              className="uppercase mt-5 w-full bg-red-500 p-3 rounded text-white font-bold hover:bg-red-400 cursor-pointer duration-300"
              onClick={terminarJuego}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Retos;
