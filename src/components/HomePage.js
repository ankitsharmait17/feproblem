import React from "react";
import { Button, Col, Row } from "reactstrap";
import * as planetAPI from "../api/planetsAPI";
import * as vehicleAPI from "../api/vehiclesAPI";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [planets, setPlanets] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);
  const [selectedPlanets, setSelectedPlanets] = React.useState({
    planet1: "",
    planet2: "",
    planet3: "",
    planet4: ""
  });
  const [selectedVehicles, setSelectedVehicles] = React.useState({
    vehicle1: "",
    vehicle2: "",
    vehicle3: "",
    vehicle4: ""
  });

  const [timeTaken, setTimeTaken] = React.useState(0);

  const getdata = async () => {
    let data = await planetAPI.getPlanets();
    setPlanets(data);
    data = await vehicleAPI.getVehicles();
    setVehicles(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const calculateTime = () => {
    let sum = 0;
    Object.values(selectedPlanets).forEach((v, i) => {
      const planet = planets.find(x => x.name === v);
      const vehicle = vehicles.find(
        x => x.name === Object.values(selectedVehicles)[i]
      );
      sum += planet && vehicle ? planet.distance / vehicle.speed : 0;
    });
    setTimeTaken(sum);
  };

  React.useEffect(() => {
    calculateTime();
  }, [selectedVehicles]);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name.includes("vehicle")) {
      setSelectedVehicles({ ...selectedVehicles, [name]: value });
    } else if (name.includes("planet")) {
      setSelectedPlanets({ ...selectedPlanets, [name]: value });
    }
  };

  const handleReset = () => {
    setSelectedPlanets({
      planet1: "",
      planet2: "",
      planet3: "",
      planet4: ""
    });
    setSelectedVehicles({
      vehicle1: "",
      vehicle2: "",
      vehicle3: "",
      vehicle4: ""
    });
    setTimeTaken(0);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg="12" className="text-right">
          <Button color="link" onClick={handleReset}>
            Reset
          </Button>
        </Col>
      </Row>
      <Row className="text-center">
        <Col lg="12">
          <h2>Select planets you want to search in</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg="3">
          {!selectedPlanets.planet1 ? (
            <SelectInput
              label="Destination 1"
              name="planet1"
              value={selectedPlanets.planet1}
              options={planets}
              handleChange={handleChange}
              disabled={selectedPlanets.planet1}
              filterOptions={selectedPlanets}
            />
          ) : (
            <React.Fragment>
              <b> Destination 1:</b> {selectedPlanets.planet1}
            </React.Fragment>
          )}
          {selectedPlanets.planet1 && (
            <RadioInput
              name="vehicle1"
              distance={
                planets.find(x => x.name === selectedPlanets.planet1).distance
              }
              options={vehicles}
              handleChange={handleChange}
              filterOptions={selectedVehicles}
            />
          )}
        </Col>
        <Col lg="3">
          {!selectedPlanets.planet2 ? (
            <SelectInput
              label="Destination 2"
              name="planet2"
              value={selectedPlanets.planet2}
              options={planets}
              handleChange={handleChange}
              disabled={selectedPlanets.planet2}
              filterOptions={selectedPlanets}
            />
          ) : (
            <React.Fragment>
              <b> Destination 2:</b> {selectedPlanets.planet2}
            </React.Fragment>
          )}
          {selectedPlanets.planet2 && (
            <RadioInput
              name="vehicle2"
              distance={
                planets.find(x => x.name === selectedPlanets.planet2).distance
              }
              options={vehicles}
              handleChange={handleChange}
              filterOptions={selectedVehicles}
            />
          )}
        </Col>
        <Col lg="3">
          {!selectedPlanets.planet3 ? (
            <SelectInput
              label="Destination 3"
              name="planet3"
              value={selectedPlanets.planet3}
              options={planets}
              handleChange={handleChange}
              disabled={selectedPlanets.planet3}
              filterOptions={selectedPlanets}
            />
          ) : (
            <React.Fragment>
              <b> Destination 3:</b> {selectedPlanets.planet3}
            </React.Fragment>
          )}
          {selectedPlanets.planet3 && (
            <RadioInput
              name="vehicle3"
              distance={
                planets.find(x => x.name === selectedPlanets.planet3).distance
              }
              options={vehicles}
              handleChange={handleChange}
              filterOptions={selectedVehicles}
            />
          )}
        </Col>
        <Col lg="3">
          {!selectedPlanets.planet4 ? (
            <SelectInput
              label="Destination 4"
              name="planet4"
              value={selectedPlanets.planet4}
              options={planets}
              handleChange={handleChange}
              disabled={selectedPlanets.planet4}
              filterOptions={selectedPlanets}
            />
          ) : (
            <React.Fragment>
              <b> Destination 4:</b> {selectedPlanets.planet4}
            </React.Fragment>
          )}
          {selectedPlanets.planet4 && (
            <RadioInput
              name="vehicle4"
              distance={
                planets.find(x => x.name === selectedPlanets.planet4).distance
              }
              options={vehicles}
              handleChange={handleChange}
              filterOptions={selectedVehicles}
            />
          )}
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg="12" className="text-center">
          <h3>Time taken : {timeTaken}</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg="12" className="text-center">
          <Link
            className="btn btn-primary"
            to={{
              pathname: "/result",
              planets: [
                selectedPlanets.planet1,
                selectedPlanets.planet2,
                selectedPlanets.planet3,
                selectedPlanets.planet4
              ],
              vehicles: [
                selectedVehicles.vehicle1,
                selectedVehicles.vehicle2,
                selectedVehicles.vehicle3,
                selectedVehicles.vehicle4
              ],
              time: timeTaken
            }}
            disabled={
              selectedPlanets.planet1 === "" ||
              selectedPlanets.planet2 === "" ||
              selectedPlanets.planet3 === "" ||
              selectedPlanets.planet4 === "" ||
              selectedVehicles.vehicle1 === "" ||
              selectedVehicles.vehicle2 === "" ||
              selectedVehicles.vehicle3 === "" ||
              selectedVehicles.vehicle4 === ""
            }
          >
            Find Falcone
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
