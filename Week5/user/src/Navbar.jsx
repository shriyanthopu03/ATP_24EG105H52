function Navbar(){
    return (
    <div className="flex justify-between px-10 py-5 bg-gray-500">
        <h1 className="font-bold text-2xl">LOGO</h1>
        <ul className="flex gap-4 ml-10">
            <li className="font-bold"><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Help</a></li>
        </ul>
    </div>
    )
}

export default Navbar
