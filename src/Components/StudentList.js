import React from 'react'
import StudentCard from './StudentCard'

function studentList({studentList,handleDelete,isDeletingStudent,updateStudentValues}) {
  return (
    studentList.map((student) => {
        return (
            <StudentCard student={student} handleDelete={handleDelete} key={student.id}
             isDeletingStudent={isDeletingStudent} updateStudentValues={updateStudentValues} />
        )
      })
    
  )
}

export default studentList