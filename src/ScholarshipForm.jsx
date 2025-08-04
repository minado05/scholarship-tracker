import React, { useState } from "react";

function ScholarshipForm({ addScholarship }) {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    amount: 0,
    due: "",
    status: "",
    note: "",
    isSelected: false,
  });
  const [errors, setErrors] = useState({});

  //update correct field when user types in an input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.amount.trim()) newErrors.amount = "Amount is required";
    if (!formData.org.trim()) newErrors.org = "Organization is required";
    if (!formData.due.trim()) newErrors.due = "Due Date is required";
    if (!formData.status.trim()) newErrors.status = "Status is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      addScholarship(formData);
      setFormData({
        name: "",
        org: "",
        amount: 0,
        due: "",
        status: "",
        note: "",
        isSelected: false,
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Add Scholarship</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Scholarship Name:
          <br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>
        <br />
        <br />

        <label>
          Organization:
          <br />
          <input type="text" name="org" value={formData.org} onChange={handleChange} />
          {errors.org && <p style={{ color: "red" }}>{errors.org}</p>}
        </label>
        <br />
        <br />

        <label>
          Amount(without $):
          <br />
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
          {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
        </label>
        <br />
        <br />

        <label>
          Due Date:
          <br />
          <input type="date" name="due" value={formData.due} onChange={handleChange} />
          {errors.due && <p style={{ color: "red" }}>{errors.due}</p>}
        </label>
        <br />
        <br />

        <label>
          Status:
          <br />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">select status</option>
            <option value="not started">not started</option>
            <option value="submitted">submitted</option>
            <option value="awarded">awarded</option>
            <option value="rejected">rejected</option>
          </select>
          {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}
        </label>
        <br />
        <br />

        <label>
          Note:
          <br />
          <textarea name="note" rows="5" value={formData.note} onChange={handleChange}></textarea>
        </label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ScholarshipForm;
