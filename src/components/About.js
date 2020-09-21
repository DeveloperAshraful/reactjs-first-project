import React, { Component } from 'react';
import DataJson from '../Data/content';

const aboutList = DataJson.abouts;

class About extends Component {
  render() {
    return (

      <div className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About Us </h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                {
                  aboutList ?
                    aboutList.map((about, i) =>
                      <li key={i} className={(i % 2 === 0) ? '' : 'timeline-inverted'}>
                        <div className="timeline-image">
                          {about.image ? <img className="rounded-circle img-fluid" src={about.image} alt={about.title} /> : <h4>{about.title}</h4>}
                        </div>
                        {about.image ?
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4>{about.subtitle}</h4>
                              <h4 className="subheading">{about.title}</h4>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">{about.content}</p>
                            </div>
                          </div>
                          : ' '}

                      </li>
                    )
                    : <p>Please Wait</p>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default About;
