function ScholarshipTable({ scholarships, setIsSelected, setScholarships }) {
  return (
    <div>
      <button
        className="button"
        style={{ background: "#fff78cff" }}
        onClick={() =>
          setScholarships(scholarships.filter((scholarship) => !scholarship.isSelected))
        }
      >
        Delete
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Scholarship Name</th>
            <th>Organization</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((scholarship, index) => (
            <tr key={index}>
              <td>
                <input
                  type="radio"
                  name="scholarship_selected"
                  value={index}
                  onChange={() => setIsSelected(index)}
                />
              </td>
              <td>{scholarship.name}</td>
              <td>{scholarship.org}</td>
              <td>${scholarship.amount}</td>
              <td>{scholarship.due}</td>
              <td
                style={{
                  background:
                    scholarship.status === "rejected"
                      ? "#f05656ff"
                      : scholarship.status === "awarded"
                      ? "#61f28dff"
                      : scholarship.status === "submitted"
                      ? "#fed462ff"
                      : "#9cc0efff",
                  borderRadius: "15px",
                }}
              >
                {scholarship.status}
              </td>
              <td>{scholarship.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScholarshipTable;
