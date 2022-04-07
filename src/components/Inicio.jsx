import { useState } from "react";

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
          <div className="my-10 bg-white shadow rounded-lg p-10">
            <h1 className="uppercase font-bold text-4xl flex justify-center">
              Juanchurri's party
            </h1>

            <p className="mt-10">Registra minimo 2 hombres y 2 mujeres</p>

            {msg && (
              <div className="bg-red-600 rounded flex justify-center mt-5">
                <p className="p-2 text-white uppercase font-bold">{mensaje}</p>
              </div>
            )}

            <form className="mt-5 " onSubmit={handleNuevoParticipante}>
              <label>Nombre de los hombres:</label>

              <div className="flex items-center mt-3">
                <input
                  type="text"
                  className="border-b mt-2 w-full mr-5"
                  placeholder="participante"
                  value={participantesHombres}
                  onChange={(e) => setParticipantesHombres(e.target.value)}
                />

                <input
                  type="submit"
                  className="bg-blue-500 w-10 text-white font-bold uppercase rounded hover:bg-blue-400 cursor-pointer duration-300 shadow-xl"
                  value="+"
                />
              </div>
            </form>

            <form className="mt-5 " onSubmit={handleNuevoParticipanteMujer}>
              <label>Nombre de las mujeres:</label>

              <div className="flex items-center mt-3">
                <input
                  type="text"
                  className="border-b mt-2 w-full mr-5"
                  placeholder="participante"
                  value={participantesMujeres}
                  onChange={(e) => setParticipantesMujeres(e.target.value)}
                />

                <input
                  type="submit"
                  className="bg-blue-500 w-10 text-white font-bold uppercase rounded hover:bg-blue-400 cursor-pointer duration-300 shadow-xl"
                  value="+"
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
