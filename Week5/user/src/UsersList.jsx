function Userlist(props){
const {userObj}=props
    return(
        
        <div className="shadow-2xl p-5 rounded-4xl mt-1.5 ">
            <img className="font-bold rounded-full m-auto" src={userObj.image} alt="img here"/>
            <h2 className="font-bold mt-5 text-center">{userObj.name}</h2>
            <p className="text-2xl text-center">{userObj.email}</p>
        </div>
    )

}

export default Userlist