import {
  PageWrapper,
  Card,
  SearchForm,
  GroupControl,
  Error,
  Universities,
  UniversityCard,
  Text,
  TextBold,
  WebSites,
} from "./styles.ts";
import { useState, type ChangeEvent } from "react";
import axios from "axios";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";
import { v4 } from "uuid";

interface University {
  name: string;
  country: string;
  webPages: string[];
}

export default function Lesson_011() {
  const UNIVERSITIES_URL = "http://universities.hipolabs.com/search?country=";

  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUniversities = async (event: any) => {
    event.preventDefault();
    setUniversities([]);
    setError(undefined);
    setIsLoading(true);

    try {
      const response = await axios.get(`${UNIVERSITIES_URL}${country}`);
      const filteredData = response.data.slice(0, 15);
      const newUniversities = filteredData.map((u: any) => ({
        name: u.name,
        country: u.country,
        webPages: u.web_pages,
      }));

      if (filteredData.length === 0) {
        setError("No Universities by your request.");
        return;
      }

      setUniversities((prevUniversities: University[]) => {
        return [...prevUniversities, ...newUniversities];
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onCountry = (event: ChangeEvent<HTMLInputElement>) =>
    setCountry(event.target.value);
  return (
    <PageWrapper>
      <Card>
        <SearchForm onSubmit={getUniversities}>
          <GroupControl>
            <Input
              id={v4()}
              label="Country"
              name="country"
              value={country}
              onChange={onCountry}
              placeholder="Enter Country for searching uneversities"
            />
            <Button
              name="Get Universities"
              type="submit"
              disabled={isLoading}
            />
          </GroupControl>
        </SearchForm>
        {!!error && <Error>{error}</Error>}
        {!!universities.length && (
          <Universities>
            {universities.map((u: University) => (
              <UniversityCard key={v4()}>
                <Text>
                  <TextBold>University: </TextBold> {u.name}
                </Text>
                <Text>
                  <TextBold>Country: </TextBold> {u.country}
                </Text>
                <WebSites>
                  <TextBold>WebSites: </TextBold>
                  {u.webPages.map((w) => (
                    <div key={v4()}>
                      <a href={w} target="_blank">
                        {w}
                      </a>
                    </div>
                  ))}
                </WebSites>
              </UniversityCard>
            ))}
          </Universities>
        )}
      </Card>
    </PageWrapper>
  );
}
