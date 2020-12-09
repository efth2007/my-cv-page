import React, { Component } from 'react'

export default class About extends Component {
    render(){
        return(
          <div>
              <div className='card'>
                  <div className='card-content'>
                      <h6 className='mt-b'><strong>About me</strong></h6>
                      <p className='grey-text'>
                          Lorem ipsum blabla bla bla Nonsense. 
                          Bla bnonsense sentence bla bla lorem ipsum bla. Bla bnonsense sentence 
                          bla bla lorem ipsum bla. Sentence words many many a lot of words oaj sdjbkd kjd. Lorem Ipsum.
                          Bla bla words.
                      </p>
                  </div>
                  <div className='card-action'>
                      <h6>
                          <strong>Personal info</strong>
                      </h6>
                      <div className='row mt'>
                          <div className='col s12 m6 l6 x16'>
                              <p><strong>Address:</strong> My address 23876, Country</p>
                              <p><strong>Email:</strong> myemail@company.com</p>
                              <p><strong>Phone:</strong> +31899389283934</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}