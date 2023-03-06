import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div className="panel" key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <div className="button is-danger" onClick={() => handleCarDelete(car)}>
          Delete
        </div>
        <hr />
      </div>
    );
  });

  return <div>{renderedCars}</div>;
}
export default CarList;
