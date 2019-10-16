import React from "react";
import { Row, Col, Button } from "reactstrap";
import * as tokenAPI from "../api/tokenAPI";
import * as findingFalconeAPI from "../api/findingFalconeAPI";

const Result = ({ location, history }) => {
  const [res, setRes] = React.useState(null);
  const getResult = async () => {
    try {
      const token = await tokenAPI.getToken();
      const response = await findingFalconeAPI.findfalcone({
        token: token.token,
        planet_names: location.planets,
        vehicle_names: location.vehicles
      });
      setRes(response);
    } catch (error) {
      alert(error.message);
    }
  };
  React.useEffect(() => {
    if (
      !location.planets ||
      location.planets.length !== 4 ||
      (!location.vehicles || location.vehicles.length !== 4)
    ) {
      alert("No. of selected planets or vehicles is less than 4.");
      history.push("/");
    } else getResult();
  }, []);
  return (
    <React.Fragment>
      <Row className="text-right">
        <Col lg="12">
          <Button color="link" onClick={() => history.push("/")}>
            Back
          </Button>
        </Col>
      </Row>
      <Row className="text-center">
        {res && res.status === "success" && (
          <React.Fragment>
            <Col lg="12">
              <h2>
                Success! Congratulations on Finding Falcone. King Shan is mighty
                pleased.
              </h2>
            </Col>
            <Col lg="12">
              <h2>Time take : {location.time}</h2>
            </Col>
            <Col lg="12">
              <h2>Planet found : {res.planet_name}</h2>
            </Col>
          </React.Fragment>
        )}
        {res && res.status === "false" && (
          <Col lg="12">
            <h2>Failure! King Shan wants you to try again.</h2>
          </Col>
        )}
      </Row>
    </React.Fragment>
  );
};

export default Result;
