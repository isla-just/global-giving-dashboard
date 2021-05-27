//do simple routing and display this loader for a few seconds while the api data loads

const Preloader=()=>{

    return(
        <div className="bodyContainer">
            <div className="largeLogo"></div>
            <p className="aboutP">The do-good dashboard that visualises positive change being <br></br>made all over the world - one donation at a time.</p>

            <p className="powered">- Powered by Global Giving -</p>
        </div>
    );
}
export default Preloader