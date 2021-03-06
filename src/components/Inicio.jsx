import { useState } from "react";
import titulo from "../img/titulo.png";

const Inicio = ({
  guardarParticipante,
  setEmpezar,
  guardarParticipanteMujer,
}) => {
  const [participantesHombres, setParticipantesHombres] = useState("");
  const [participantesMujeres, setParticipantesMujeres] = useState("");

  const [mensaje, setMensaje] = useState("");

  const handleNuevoParticipante = (e) => {
    e.preventDefault();
    if ([participantesHombres].includes("")) {
      setMensaje("Ingrese nombre de participante");
      return;
    }

    guardarParticipante({ participantesHombres });
    setParticipantesHombres("");
  };

  const handleNuevoParticipanteMujer = (e) => {
    e.preventDefault();
    if ([participantesMujeres].includes("")) {
      setMensaje("Ingrese nombre de participante");
      return;
    }

    guardarParticipanteMujer({ participantesMujeres });
    setParticipantesMujeres("");
  };

  const empezarFiesta = () => {
    if (
      localStorage.getItem("participantesHombres").split("participantesHombres")
        .length > 2 ||
      localStorage.getItem("participantesMujeres").split("participantesMujeres")
        .length > 2
    ) {
      setEmpezar(true);
    } else {
      setMensaje("No hay ningun jugador todavia");

      if (
        localStorage
          .getItem("participantesHombres")
          .split("participantesHombres").length > 1
      ) {
        setMensaje("falta un jugador mas");
      }
    }
  };

  const msg = mensaje;

  return (
    <div>
      <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5">
          <img src={titulo} className="mx-auto" />
          <div className="my-5 bg-white shadow-xl rounded-sm p-10 m-3 ">
            <p className="font-bold capitalize">
              Registra minimo 2 hombres y 2 mujeres
            </p>

            {msg && (
              <div className="bg-red-600 rounded flex justify-center mt-5">
                <p className="p-2 text-white uppercase font-bold">{mensaje}</p>
              </div>
            )}

            <form
              className="mt-5 capitalize "
              onSubmit={handleNuevoParticipante}
            >
              <label className="font-bold">hombres:</label>

              <div className="flex items-center mt-3">
                <input
                  type="text"
                  className="border-b mt-2 w-full mr-5"
                  placeholder="Nombre"
                  value={participantesHombres}
                  onChange={(e) => setParticipantesHombres(e.target.value)}
                />

                <input
                  type="submit"
                  className="bg-blue-500  text-white text-xs p-1 font-bold uppercase rounded hover:bg-blue-400 cursor-pointer duration-300 shadow-xl"
                  value=" + agregar "
                />
              </div>
            </form>

            <form
              className="mt-5 capitalize "
              onSubmit={handleNuevoParticipanteMujer}
            >
              <label className="font-bold">mujeres:</label>

              <div className="flex items-center mt-3">
                <input
                  type="text"
                  className="border-b mt-2 w-full mr-5"
                  placeholder="Nombre"
                  value={participantesMujeres}
                  onChange={(e) => setParticipantesMujeres(e.target.value)}
                />

                <input
                  type="submit"
                  className="bg-blue-500 text-xs p-1 text-white font-bold uppercase rounded hover:bg-blue-400 cursor-pointer duration-300 shadow-xl"
                  value=" + agregar "
                />
              </div>
            </form>

            <input
              type="button"
              className="mt-10 bg-red-600 p-3 w-full text-white font-bold uppercase rounded hover:bg-red-500 cursor-pointer duration-300 shadow-xl"
              value="Empezar la fiesta"
              onClick={empezarFiesta}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
