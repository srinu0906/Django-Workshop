import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({
        student_id: "",
        first_name: "",
        last_name: "",
        gender: "",
        address: "",
        mobile_number: "",
        branch: "",
        email: "",
        date_of_birth: "",
    });

    // Fetch students when the component mounts
    useEffect(() => {
        axios
            .get("http://localhost:8000/wel/")
            .then((res) => {
              setStudents(res.data.students || []);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/wel/", student)
            .then((res) => {
                setStudents((prevStudents) => [...prevStudents, res.data]); // Add new student to state
                setStudent({
                    student_id: "",
                    first_name: "",
                    last_name: "",
                    gender: "",
                    address: "",
                    mobile_number: "",
                    branch: "",
                    email: "",
                    date_of_birth: "",
                });
            })
            .catch((err) => {
                console.error("Error posting data:", err);
            });
    };

    return (
        <div className="container">
            {/* Form for adding a new student */}
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Student ID</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            name="student_id"
                            value={student.student_id}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            value={student.first_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            value={student.last_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            name="gender"
                            value={student.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={student.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            name="mobile_number"
                            value={student.mobile_number}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Branch</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="branch"
                            value={student.branch}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={student.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Date of Birth</label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            name="date_of_birth"
                            value={student.date_of_birth}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Student
                </button>
            </form>

            <hr />

            {/* Display the list of students */}
            <h3>Student List</h3>
            {console.log(students, "students data")}
            <div>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                {student.first_name} {student.last_name}
              </h5>
              <p className="card-text">
                <strong>Student ID:</strong> {student.student_id} <br />
                <strong>Gender:</strong> {student.gender} <br />
                <strong>Address:</strong> {student.address} <br />
                <strong>Mobile Number:</strong> {student.mobile_number} <br />
                <strong>Branch:</strong> {student.branch} <br />
                <strong>Email:</strong> {student.email} <br />
                <strong>Date of Birth:</strong> {student.date_of_birth} <br />
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No students found.</p>
      )}
    </div>
        </div>
    );
};

export default App;
