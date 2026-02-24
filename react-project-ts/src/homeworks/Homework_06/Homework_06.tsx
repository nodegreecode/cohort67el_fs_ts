import {
  PageWrapper,
  Container,
  CardWrapper,
  Card,
  CardTitle,
  CardText,
} from "./styles.ts";
import { v4 } from "uuid";

interface Car {
  brand: string;
  price: number;
  isDiesel: boolean;
}

const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

function Homework_06() {
  const carsDetails = cars.map((car: Car) => (
    <Card key={v4()}>
      <CardTitle>
        <span>Brand:</span> {car.brand}
      </CardTitle>
      <CardText>
        <span>Price: </span> {car.price}
      </CardText>
      <CardText>
        <span>Fuel type:</span> {car.isDiesel ? "Diesel" : "Patrol"}
      </CardText>
    </Card>
  ));

  return (
    <PageWrapper>
      <Container>
        <CardWrapper>{carsDetails}</CardWrapper>
      </Container>
    </PageWrapper>
  );
}

export default Homework_06;
