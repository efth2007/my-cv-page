import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ImgProfile from '../images/dwight.jpg'
 
export default class Profile extends Component {
    render(){
        return(
          <div>
            <div className='card'>
              <div className='card-image'> 
                <img className='activator' src={ImgProfile} alt='My Name' />
                <Link className='btn-floating halfway-fab waves-effect wave-light blue'>
                  <i className='material-icons activator'>more_vert</i>
                </Link>
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                  My Name
                </span>
                <p>Frontend Developer</p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                  Follow me
                </span>
                <p className='flex-container'>
                  <i className='fab fa-facebook grey-text text-darken-4 social-style'></i>
                  <i className='fab fa-linkedin grey-text text-darken-4 social-style'></i>
                  <i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
                  <i className='fab fa-google-plus grey-text text-darken-4 social-style'></i>
                </p>
              </div>
            </div>
          </div>
        )
    }
}