import React from "react";
import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
import { Container } from "react-bootstrap";






function Home(){


  

    return(

        <React.Fragment>

            <Seo page="Home">
              <Navbar/>

              <div className="side_decor">
                <img src="asset/img/Group 1.svg" alt="stripes"/>

              </div>

              <Container>

                <div className="section">
                <span className="header_text"> What are you Looking for?</span>

                <form className="search_box">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.275 2.714a8.561 8.561 0 1 1 0 17.122 8.561 8.561 0 0 1 0-17.122ZM19.899 18.488a1.411 1.411 0 1 1-.001 2.822 1.411 1.411 0 0 1 .001-2.822Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <input placeholder="Search For any phones "/>
                  <button> Search  </button>

                </form>

                <button className="loader"> Load Iphone</button>
                </div>
              
              </Container>
            


            </Seo>
          
        </React.Fragment>
    );
}

export default Home;