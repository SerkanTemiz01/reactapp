import React from 'react'


function StudentCard({student,handleDelete,index,isDeletingStudent,updateStudentValues}) {
  
  return (
    <div className="student-card" key={index} onClick={(event)=>{event.preventDefault(); updateStudentValues(student)}}>
            <div className="topOf-card" >
            <h2 >Student Card</h2>
            <button 
                onClick={(event) => {
                  event.preventDefault();
                  handleDelete(student.id);
                }}
              >
                {isDeletingStudent===student.id?<span className='delete'>Deleting...</span>:<span>X</span>}
              </button>
            </div>
            <li >
              <span >Name: </span>
              {student.name}
            </li>
            <li >
              <span>Course: </span>
              {student.course}
            </li>
            <li >
              <span>Instructor: </span> {student.instructor}
            </li>
            <li >
              <span >Score: </span> {student.score}
            </li>
          </div>
  )
}

export default StudentCard