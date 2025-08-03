import React, { useEffect, useState } from "react";

function ScholarshipTable() {
  const [scholarships, setScholarships] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("scholarships");
    if (stored) {
      setScholarships(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <table className="table">
        <tr>
          <th>Scholarship Name</th>
          <th>Organization</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Note</th>
        </tr>
        <tr>
          <td>AAP Scholarship</td>
          <td>UCLA AAP</td>
          <td>$1000</td>
          <td>08/03/2025</td>
          <td>Submitted</td>
          <td>this is</td>
        </tr>
        <tr>
          <td>SMC Scholarship</td>
          <td>SMC</td>
          <td>$2000</td>
          <td>08/06/2025</td>
          <td>Not started</td>
          <td>
            this is a very long sentence hopefully it runs out of page. helloooooooooo so excited
            ahhhhhhhhhhhhhh
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ScholarshipTable;
