import { type ChangeEvent, useEffect, useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import { PageWrapper, ContainerFacts, Card, Text } from "./styles";
import Button from "components/Button/Button.tsx";
import Input from "components/Input/Input.tsx";

function Lesson_10() {
  const CAT_FACT_URL: string = "https://catfact.ninja/fact";
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [catFacts, setCatFacts] = useState<string[]>([]);

  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /*const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };*/

  const getCatFact = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(CAT_FACT_URL);
      setCatFacts((prevValue) => [...prevValue, response.data.fact]);
    } catch (error: any) {
      setError("Some Network Problem: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Mounting
  useEffect(() => {
    console.log("Mounting...");
    getCatFact();
  }, []);

  // Updating
  useEffect(() => {
    if (searchTerm) console.log(searchTerm);
  }, [searchTerm]);

  //Unmounting
  useEffect(() => {
    return () => {
      console.log("Unmounting...");
    };
  }, []);

  return (
    <PageWrapper>
      <Card>
        {/* <Input
          id="seacrh-input"
          name="search"
          label="Search"
          placeholder="Enter your request"
          value={searchTerm}
          onChange={onSearch}
        />*/}
        <ContainerFacts>
          {/*{!!catFact && <Text>{catFact}</Text>}*/}
          {/* {!!error && <Text>{error}</Text>}*/}
          <ol>
            {catFacts.map((catFact: string) => (
              <li key={v4()}>{catFact}</li>
            ))}
          </ol>
        </ContainerFacts>
        <Button name="Get cat fact" onClick={getCatFact} disabled={isLoading} />
      </Card>
    </PageWrapper>
  );
}
export default Lesson_10;
