import { useEffect, useRef, useState } from "react";

function SymptomTracker() {
  console.log("Component Rendered");

  const symptomRef = useRef(null);

  const [symptoms, setSymptoms] = useState([]);

  // useState input experiment
  const [stateInput, setStateInput] = useState("");

  // Auto focus
  useEffect(() => {
    symptomRef.current.focus();
  },[]);

  const addSymptom = () => {
    const symptom = symptomRef.current.value;

    if (!symptom.trim()) return;

    setSymptoms((prev) => [...prev, symptom]);

    symptomRef.current.value = "";
    symptomRef.current.focus();
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-warning">Symptom Tracker (useRef)</div>

      <div className="card-body">
        <h5 className="mb-3">useState vs useRef Experiment</h5>

        <div className="mb-3">
          <label className="form-label">useState Input</label>

          <input
            type="text"
            className="form-control"
            value={stateInput}
            onChange={(e) => setStateInput(e.target.value)}
            placeholder="Typing causes re-render"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">useRef Input</label>

          <input
            type="text"
            className="form-control"
            ref={symptomRef}
            placeholder="Typing does NOT re-render"
          />
        </div>

        <button className="btn btn-primary mb-3" onClick={addSymptom}>
          Add Symptom
        </button>

        <h5>Symptoms List</h5>

        {symptoms.length === 0 ? (
          <p>No symptoms added.</p>
        ) : (
          <ul className="list-group">
            {symptoms.map((symptom, index) => (
              <li key={index} className="list-group-item">
                {symptom}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SymptomTracker;
