import React from 'react'

function StudentForm({student,isStudentValid,HandleChange,handleSubmit}) {
  return (
    <form action="form">
        <h2>Student Form</h2>
        <div className="input-box">
          <label>Name: </label>
          <input
            id="message1"
            type="text"
            name="name"
            value={student.name}
            onChange={HandleChange}
          ></input>
          {!isStudentValid.name && <span>Name can not be empty.</span>}
          <label>Course: </label>
          <input
            id="message2"
            type="text"
            name="course"
            value={student.course}
            onChange={HandleChange}
          ></input>
          {!isStudentValid.course && <span>Course can not be empty.</span>}
          <label>Instructor: </label>
          <input
            id="message3"
            type="text"
            name="instructor"
            value={student.instructor}
            onChange={HandleChange}
          ></input>
          {!isStudentValid.instructor && (
            <span>Instructor can not be empty.</span>
          )}
          <label>Score: </label>
          <input
            id="message4"
            type="text"
            name="score"
            value={student.score}
            onChange={HandleChange}
          ></input>
          {!isStudentValid.score && <span>Score can not be empty.</span>}
        </div>
        <button
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
  )
}

export default StudentForm