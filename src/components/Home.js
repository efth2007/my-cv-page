import React, { Component } from 'react'
import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education"
import Portfolios from "./Portfolios"
import Profile from "./Profile";
import Navbar from "./Navbar"
import About from "./About"


export default class Home extends Component {
    render(){
        return(
           <section>
               <Navbar/>
               <div className="row">
                   <div className="col s12 m4 13">
                       <Profile />
                   </div>
                   <div className="col s12 m8 19">
                       <About/>
                       <Skills/>
                       <Experience/>
                       <Education/>
                       <Portfolios />

                   </div>
               </div>
           </section>
        )
    }
}