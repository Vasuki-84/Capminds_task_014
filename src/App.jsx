import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PatientList from "./components/PatientList";
import SymptomTracker from "./components/SymptomTracker";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Dashboard />
        <PatientList />
        <SymptomTracker />
      </div>
    </>
  );
}

export default App;