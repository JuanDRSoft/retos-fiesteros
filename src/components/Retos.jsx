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
  const randomReto = (Math.random() * arrayM.length) | 0;

  const siguienteReto = () => {
    window.location.reload(true);
  };

  return (
    <div>
      <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5">
          <div className="my-10 bg-white shadow rounded-lg p-10">
            <h1 className="uppercase font-bold text-4xl flex justify-center">
              Reto
            </h1>

            <div>
              <p className="font-bold capitalize mt-10 flex justify-center text-lg">
                {arrayH[randomH]} {arrayRetos[randomReto]} {arrayM[randomM]}
              </p>
            </div>

            <button
              className="bg-blue-600 p-3 w-full uppercase font-bold text-white mt-5 rounded"
              onClick={siguienteReto}
            >
              Siguiente Reto
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Retos;
