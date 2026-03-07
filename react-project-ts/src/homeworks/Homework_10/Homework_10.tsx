import { v4 } from "uuid";
import Button from "components/Button/Button.tsx";
import { type Joke } from "./types.ts";
import {
  PageWrapper,
  Card,
  GroupControl,
  CardTitle,
  ButtonControl,
  ContainerJokes,
  JokeElement,
  Message,
} from "./styles.ts";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Homework_10() {
  const JOKE = "https://official-joke-api.appspot.com/random_joke";

  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>(undefined);

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(JOKE);
      setJokes((prevJokes: Joke[]) => [
        ...prevJokes,
        { setup: response.data.setup, punchline: response.data.punchline },
      ]);
    } catch (error: any) {
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <GroupControl>
          <CardTitle>Random Jokes</CardTitle>
          <ButtonControl>
            <Button
              name="Get new joke"
              onClick={getJoke}
              disabled={isLoading}
            />
          </ButtonControl>
        </GroupControl>
        {error && <Message>{error}</Message>}
        {!error && (
          <ContainerJokes>
            {jokes.map((joke: Joke) => (
              <JokeElement key={v4()}>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
              </JokeElement>
            ))}
          </ContainerJokes>
        )}
      </Card>
    </PageWrapper>
  );
}
