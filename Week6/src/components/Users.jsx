import { useContext, useEffect, useState } from "react"
import { counterContextObj } from "./CounterContextProvider"
import Usercount from "./Usercount"
function Users(){
    console.log("API demo rendered");
    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null)
    const { increment } = useContext(counterContextObj)

    useEffect(()=>{
        async function getData(){
            setLoading(true)
            try{
                let res = await fetch("https://jsonplaceholder.typicode.com/users")
                let usersList=await res.json();
                //update state
                setUsers(usersList);
            } catch(err){
                console.log("err is ",err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        getData();
    },[])

    if(loading){
        return <p className="text-center text-5xl">Loading</p>
    }
    if(error!=null){
        return <p className="text-center text-red-500 text-5xl">Failed</p>
    }

    return (
        <div className="text-center">
            <Usercount />
            <h1 className="mt-2 text-center text-blue-800 text-5xl">List of Users</h1>
            <div className="mt-2 text-3xl grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-1">
                {
            users.map((user)=>(
            <div key={user.id} className="border p-5">
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
            <p className="mt-1 text-sm text-gray-500">{user.company?.name}</p>
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={increment}>
              Add User
            </button>
                        </div>
                    ))
                }
            </div>
             
        </div>
    )
}

export default Users;