import { useState, useEffect } from "react";
import Inicio from "./components/Inicio";
import Retos from "./components/Retos";
import { generarId } from "./helper";

function App() {
  //Hombres
  const [participantesHombres, setParticipantesHombres] = useState(
    localStorage.getItem("participantesHombres")
      ? JSON.parse(localStorage.getItem("participantesHombres"))
      : []
  );

  useEffect(() => {
    localStorage.setItem(
      "participantesHombres",
      JSON.stringify(participantesHombres) ?? []
    );
  }, [participantesHombres]);

  const guardarParticipante = (participante) => {
    if (participante.id) {
      const participantesActualizados = participantesHombres.map(
        (participanteState) =>
          participanteState.id === participante.id
            ? participante
            : participanteState
      );
      setParticipantesHombres(participantesActualizados);
    } else {
      participante.id = generarId();
      setParticipantesHombres([...participantesHombres, participante]);
    }
  };

  //Mujeres
  const [participantesMujeres, setParticipantesMujeres] = useState(
    localStorage.getItem("participantesMujeres")
      ? JSON.parse(localStorage.getItem("participantesMujeres"))
      : []
  );

  useEffect(() => {
    localStorage.setItem(
      "participantesMujeres",
      JSON.stringify(participantesMujeres) ?? []
    );
  }, [participantesMujeres]);

  const guardarParticipanteMujer = (participante) => {
    if (participante.id) {
      const participantesActualizados = participantesHombres.map(
        (participanteState) =>
          participanteState.id === participante.id
            ? participante
            : participanteState
      );
      setParticipantesMujeres(participantesActualizados);
    } else {
      participante.id = generarId();
      setParticipantesMujeres([...participantesMujeres, participante]);
    }
  };

  //General
  const [empezar, setEmpezar] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("participantesHombres").split("participantesHombres")
        .length > 2 ||
      localStorage.getItem("participantesMujeres").split("participantesMujeres")
        .length > 2
    ) {
      setEmpezar(true);
    }
  }, []);

  return (
    <div>
      {empezar ? (
        <>
          <main>
            <Retos
              participantesHombres={participantesHombres}
              participantesMujeres={participantesMujeres}
            />
          </main>
        </>
      ) : (
        <Inicio
          guardarParticipante={guardarParticipante}
          guardarParticipanteMujer={guardarParticipanteMujer}
          setEmpezar={setEmpezar}
        />
      )}
    </div>
  );
}

export default App;
