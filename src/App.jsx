import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    course: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Add a new student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      course: formData.course || 'Not Assigned'
    };

    setStudents([...students, newStudent]);
    setFormData({ id: '', name: '', email: '', course: '' });
  };

  // Add/Update course for a student
  const handleAddCourse = (studentId) => {
    const courseInput = prompt('Enter course name:');
    if (courseInput && courseInput.trim() !== '') {
      setStudents(
        students.map(student =>
          student.id === studentId
            ? { ...student, course: courseInput }
            : student
        )
      );
    }
  };

  // Delete a student
  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== studentId));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Student Registration System</h1>

        {/* Add Student Form */}
        <div className="form-container">
          <h2>Add New Student</h2>
          <form onSubmit={handleAddStudent}>
            <div className="form-group">
              <label htmlFor="name">Student Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter student name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="course">Course (Optional):</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                placeholder="Enter course name"
              />
            </div>

            <button type="submit" className="btn btn-add">
              Add Student
            </button>
          </form>
        </div>

        {/* Display Students */}
        <div className="students-container">
          <h2>Registered Students</h2>
          {students.length === 0 ? (
            <p className="no-students">No students registered yet.</p>
          ) : (
            <table className="students-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
                    <td className="actions">
                      <button
                        className="btn btn-course"
                        onClick={() => handleAddCourse(student.id)}
                      >
                        Add/Update Course
                      </button>
                      <button
                        className="btn btn-delete"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;