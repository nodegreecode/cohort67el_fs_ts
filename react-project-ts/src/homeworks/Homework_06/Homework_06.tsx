import "./styles.css";
import {v4} from "uuid";

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
    <div key={v4()} className="card">
      <h2 className="card-title"><span>Brand:</span> {car.brand}</h2>
      <p className="card-text">
        <span>Price: </span> {car.price}
      </p>
      <p className="card-text">
        <span>Fuel type:</span> {car.isDiesel ? "Diesel" : "Patrol"}
      </p>
    </div>
  ))

  return (
    <section className="homework_06-section">
      <div className="container">
        <div className="card-wrapper">
          {carsDetails}
        </div>
      </div>
    </section>
  );
}

export default Homework_06;
