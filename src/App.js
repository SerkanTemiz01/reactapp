import { useState,useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
import StudentForm from "./Components/StudentForm";
import axios from "axios"

function App() {
  const API=" http://localhost:5001";
  const [student, setStudent] = useState({
    name: "",
    course: "",
    instructor: "",
    score: "",
  });
  const [isStudentValid, setIsStudentValid] = useState({
    name: true,
    course: true,
    instructor: true,
    score: true
  });
  const [isDeletingStudent,setIsDeletingStudent]=useState(0);
  const HandleChange = (e) => {
    setStudent(prevStudent=>({
      ...prevStudent,
      [e.target.name]: e.target.value
    }));
  };
  const [studentList, setStudentList] = useState([]);
 const[isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    const getStudents=async()=>{
      setIsLoading(true);
      const response=await axios.get(`${API}/students`);
      setStudentList(response.data);
      setIsLoading(false);
    }
    getStudents();
  },[])

  const handleDelete = async(id) =>{
    setIsDeletingStudent(id);
    const response=await axios.delete(`${API}/students/${id}`)   
    if(response.status===200){
      setIsDeletingStudent(0);
      setStudentList((prevStudentList) =>prevStudentList.filter((student) => student.id !== id));
      
    }
  
  }
  
  const handleSubmit=async(event) => {
    event.preventDefault();
    setIsStudentValid(student);
    console.log(student);
    if (Object.values(student).every((values) => values)&&student.id==undefined) {
      const response=await axios.post(`${API}/students`,student);
      if(response.status===201){
        setStudentList(prevStudents=>[...prevStudents,response.data]);
        setStudent({
          name: "",
          course: "",
          instructor: "",
          score: "",
        });
      }
     
    } 
    else{
      const response=await axios.put(`${API}/students/`+student.id,student);
      if(response.status===200){
        const updatedStudents=[...studentList];
        const index=studentList.findIndex(student1=>student1.id==student.id);
        updatedStudents[index]={...updatedStudents[index],...student};
        setStudentList(updatedStudents);
        setStudent({
          name: "",
          course: "",
          instructor: "",
          score: "",
        });
      }
    }
  }
const updateStudentValues=async(student)=>{
  console.log(student);
  setStudent(student);
}
  return (
    <div className="App">
      <Header title="STUDENT APP" props1="Home" prop2="About" prop3="Contact"/>
      <StudentForm student={student}
       isStudentValid={isStudentValid} 
       handleSubmit={handleSubmit}
       HandleChange={HandleChange}/>
      <div className="all-cards">
        {isLoading?<p>Page is loading...</p>:<StudentList studentList={studentList}
         handleDelete={handleDelete} isDeletingStudent={isDeletingStudent} updateStudentValues={updateStudentValues}/>}      
        </div>
    </div>
  );
}

export default App;
