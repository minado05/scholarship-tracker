import "./App.css";
import React, { useState } from "react";
import ScholarshipTable from "./ScholarshipTable.jsx";
import ScholarshipForm from "./ScholarshipForm.jsx";

function App() {
  const [scholarships, setScholarships] = React.useState(() => {
    const saved = localStorage.getItem("scholarships");
    return saved ? JSON.parse(saved) : [];
  });
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  React.useEffect(() => {
    localStorage.setItem("scholarships", JSON.stringify(scholarships));
  }, [scholarships]);

  const addScholarship = (newScholarship) => {
    setScholarships((prev) => [...prev, newScholarship]);
  };

  //toggle isSelected of checked item
  const setIsSelected = (index) => {
    setScholarships((prev) =>
      prev.map((scholarship, i) =>
        i === index ? { ...scholarship, isSelected: !scholarship.isSelected } : scholarship
      )
    );
  };

  return (
    <div>
      <h1>Scholarship Tracker</h1>
      <ScholarshipTable
        scholarships={scholarships}
        setIsSelected={setIsSelected}
        setScholarships={setScholarships}
      />
      <button className="button" onClick={toggleForm}>
        {showForm ? "Hide Form" : "Add Scholarship"}
      </button>
      {showForm && <ScholarshipForm addScholarship={addScholarship} />}{" "}
    </div>
  );
}

export default App;
