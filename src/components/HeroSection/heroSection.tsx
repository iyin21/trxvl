
const HeroSection =()=>{
    return(
        <div>
            <h2 className="text-white-100 text-4xl">The whole world awaits.</h2>
            <div className="flex">
                <input type="text" placeholder="Search destinations, hotels" />
                <div>
                    <p>Check in</p>
                </div>
                <div>
                    <p>Check out</p>
                </div>
                <div>
                    <p>1 room, 2 adults</p>
                </div>
                <button>Search</button>
    
            </div>
        </div>
    )
}

export default HeroSection