function ScholarshipTable({ scholarships, setIsSelected, setScholarships }) {
  return (
    <div>
      <button
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
                  type="checkbox"
                  checked={scholarship.isSelected}
                  onChange={() => setIsSelected(index)}
                />
              </td>
              <td>{scholarship.name}</td>
              <td>{scholarship.org}</td>
              <td>${scholarship.amount}</td>
              <td>{scholarship.due}</td>
              <td>{scholarship.status}</td>
              <td>{scholarship.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScholarshipTable;
