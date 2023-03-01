import { useQuery } from "@tanstack/react-query";

const getNumberFromApi = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const data = await response.text();
  return +data;
};

export const useRandom = () => {
  const query = useQuery(["randomNumber"], getNumberFromApi);

  return query;
};
