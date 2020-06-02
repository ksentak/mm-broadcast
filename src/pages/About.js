import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <section className='title-section text-left text-sm-center'>
        <h1>
          ABOUT <span>MATT MURPHY</span>
        </h1>
      </section>

      <section className='main-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-5 col-xl-6'>
              <div className='row'>
                <img src='https://via.placeholder.com/250' alt='Profile' />
              </div>
            </div>
            <div className='col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0'>
              <div className='row'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quis pariatur
                  consequuntur voluptatum reprehenderit modi earum, ut eos quisquam incidunt nisi
                  consequatur eius provident, libero amet, tenetur nihil deserunt placeat? Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Quidem est nemo quasi
                  cupiditate! Totam laborum similique ex labore facere. Doloremque, enim qui?
                  Ducimus dicta, qui in nobis facilis dolorum aspernatur.
                </p>
              </div>
            </div>
          </div>
          <hr className='separator mt-1' />
          <div className='row'>
            <div className='col-12'>
              {/* <h3 className='text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600'></h3> */}
            </div>
            <div className='col-lg-6 m-15px-tb'>
              <div className='resume-box'>
                <ul>
                  <li>
                    <div className='icon'>
                      <i className='fa fa-briefcase'></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>2018 - Present</span>
                    <h5 className='poppins-font text-uppercase'>
                      Broadcaster <span className='place open-sans-font'>Blue Coats</span>
                    </h5>
                    <p className='open-sans-font'>
                      Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                      adipisicing elit,
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='fa fa-briefcase'></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>2015 - 2018</span>
                    <h5 className='poppins-font text-uppercase'>
                      Broadcaster <span className='place open-sans-font'>Other</span>
                    </h5>
                    <p className='open-sans-font'>
                      Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit,
                      tempor incididunt
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='fa fa-briefcase'></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>2015 - 2018</span>
                    <h5 className='poppins-font text-uppercase'>
                      Broadcaster <span className='place open-sans-font'>Other</span>
                    </h5>
                    <p className='open-sans-font'>
                      Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed
                      do eiusmod tempor duntt
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 m-15px-tb'>
              <div className='resume-box'>
                <ul>
                  <li>
                    <div className='icon'>
                      <i className='fa fa-graduation-cap'></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>2018</span>
                    <h5 className='poppins-font text-uppercase'>
                      Broadcasting Degree{' '}
                      <span className='place open-sans-font'>Fordham University</span>
                    </h5>
                    <p className='open-sans-font'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor
                      incididunt ut labore
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='fa fa-graduation-cap'></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>2018</span>
                    <h5 className='poppins-font text-uppercase'>
                      Broadcasting Degree{' '}
                      <span className='place open-sans-font'>Fordham University</span>
                    </h5>
                    <p className='open-sans-font'>
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt
                      ut adipisicing
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='fa fa-graduation-cap'></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>2018</span>
                    <h5 className='poppins-font text-uppercase'>
                      Broadcasting Degree{' '}
                      <span className='place open-sans-font'>Fordham University</span>
                    </h5>
                    <p className='open-sans-font'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor ut labore
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
