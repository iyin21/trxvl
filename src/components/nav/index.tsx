import Menu from "./assets/menu.svg"

const Nav=()=>{
    return(
        <nav >
            
            <div className="justify-between p-4 hidden md:flex">
            <p className="text-white-100 text-3xl font-bold">trxvl.</p>
            <div className=" mt-4">
                <a href="" className="text-white-10 ml-6">Home</a>
                <a href="" className="text-white-10 ml-6">Stays</a>
                <a href="" className="text-white-10 ml-6">Fights</a>
                <a href="" className="text-white-10 ml-6">Packages</a>
                <a href="" className="text-white-10 ml-6">Signup</a>
            </div>
            </div>
            <div className="flex md:hidden p-6">
                <img src={Menu} alt="" />
                <p className="text-white-100 text-2md font-bold justify-center text-center">trxvl.</p>
            </div>
        </nav>
    )
}

export default Nav;