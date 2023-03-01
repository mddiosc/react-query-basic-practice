import { useEffect, useReducer, useState } from "react";

import "./App.css";

const getNumberFromApi = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const data = await response.text();
  return +data;
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [key, forceRefetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getNumberFromApi()
      .then(setNumber)
      .catch((error) => setError(error.message));
  }, [key]);

  useEffect(() => {
    if (number) {
      setIsLoading(false);
    }
  }, [number]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
    }
  }, [error]);

  return (
    <div className="App App-header">
      {isLoading ? (
        <h2>Cargando ...</h2>
      ) : (
        !error && <h2>Número aleatorio: {number} </h2>
      )}

      {!isLoading && error && <h3>{error}</h3>}

      <button onClick={forceRefetch} disabled={isLoading}>
        Nuevo número
      </button>
    </div>
  );
};
