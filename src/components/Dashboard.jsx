import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function Dashboard() {
  const patient = useContext(PatientContext);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-success text-white">
        Patient Information
      </div>

      <div className="card-body">
        <h5>Name: {patient.name}</h5>
        <p>Email: {patient.email}</p>
      </div>
    </div>
  );
}

export default Dashboard;
