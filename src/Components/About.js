import me from "./images/me.png"

function About(){
// we create a function to open our cv

const resume = () => {
    window.open(
      "https://drive.google.com/file/d/15V_I5zW-iQ8eYWvtQEmi6sZ-6DgWGvya/view",
      "_blank"
    );
  };

    // we return jsx
    return(
        <div className="container">
            <div>
      <section className="about py-5" id="about">
        <div className="container-fluid py-5">
          <h2 style={{ fontSize: "35px", color: "#00ddff" }}>
          
            &nbsp;<b>&lt; About Me. /&gt;</b>
          </h2>
          <br />
          <img className="img-fluid img-thumbnail" style={{width: "200px"}} src={me} alt="me.." />
          <br />
          <div className="col">
            <p  style={{color:"#00ff00"}}> &nbsp;&nbsp; {"My tag name"}</p>
            <p className="py-5">
              {" "}
              &nbsp; I am John Robinson
              <span style={{color:"#00ff00"}} className="font-weight-bold">
                {/* <b>{"aboutdetails.name"}</b> */}
              </span>
              {/* {"aboutdetails.description"} */}
            </p>
          </div>
          <button
            className="resume"
            style={{ backgroundColor: "#00ff00" }}
            variant="primary"
            onClick={resume}
          >
            Download Resume
          </button>
        </div>

        {/*</div>*/}
        
      </section>
    </div>
        </div>
    );
}

export default About;