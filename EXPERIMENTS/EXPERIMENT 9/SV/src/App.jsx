import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]); 

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setUsers([...users, formData]);

      setSuccess(true);
      setFormData({ name: "", email: "", password: "" });
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Register</button>

        {success && (
          <div className="success">Registration Successful!</div>
        )}
      </form>

      {/* Display Registered Users */}
      {users.length > 0 && (
        <div className="user-list">
          <h3>Registered Users</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;