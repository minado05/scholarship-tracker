import "./App.css";
import React from "react";
import ScholarshipTable from "./ScholarshipTable.jsx";
import ScholarshipForm from "./ScholarshipForm.jsx";

function App() {
  const [scholarships, setScholarships] = React.useState(() => {
    const saved = localStorage.getItem("scholarships");
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("scholarships", JSON.stringify(scholarships));
  }, [scholarships]);

  const addScholarship = (newScholarship) => {
    setScholarships((prev) => [...prev, newScholarship]);
  };
  return (
    <div>
      <h1>Scholarship Tracker</h1>
      <ScholarshipTable scholarships={scholarships} />
      <ScholarshipForm addScholarship={addScholarship} />
    </div>
  );
}

export default App;
