import { useQuery } from "@tanstack/react-query";

import "./App.css";
import { useRandom } from "./hooks/useRandom";

export const App = () => {
  const {
    data: number,
    isLoading,
    isError,
    error,
    isFetching,
    refetch: forceRefetch,
  } = useRandom();

  return (
    <div className="App App-header">
      {isFetching ? (
        <h2>Cargando ...</h2>
      ) : (
        <h2>Número aleatorio: {number} </h2>
      )}

      {!isLoading && isError && <h3>{`${error}`}</h3>}

      <button onClick={() => forceRefetch()} disabled={isFetching}>
        Nuevo número
      </button>
    </div>
  );
};
