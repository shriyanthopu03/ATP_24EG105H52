import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();
 
  const gotoEditEmpoyee =async (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  const gotoEmpoyee = async(empObj) => {
    navigate("/employee", { state: empObj });
  };
  const deleteEmpById=async(id)=>{
    let res=await axios.delete(`${BACKEND_URL}/emp-api/employees/${id}`)
    if(res.status ===200){
      getEmps()
    }
  }
  async function getEmps() {
      let res = await axios.get(`${BACKEND_URL}/emp-api/employees`);
      if (res.status === 200) {
        let resObj = await res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
    getEmps();
  }, []);


  return (
    <div>
      <h1 className="text-4xl text-center font-black">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded-2xl">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            {/* /3buttons */}
            <div className="flex justify-around ">
              <button onClick={() => gotoEmpoyee(empObj)} className="bg-green-600 rounded-xl text-white p-2">View</button>
              <button onClick={() => gotoEditEmpoyee(empObj)} className="bg-yellow-600 rounded-xl text-white p-2">
                Edit
              </button>
              <button onClick={() => deleteEmpById(empObj._id)} className="bg-red-600 rounded-xl text-white p-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;