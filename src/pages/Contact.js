import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <section class='title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1'>
          <h1>
            CONTACT <span>MATT MURPHY</span>
          </h1>
        </section>
        <section className='main-content revealator-slideup revealator-once revealator-delay1'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-4'>
                <h3 className='text-uppercase custom-title mb-0 ft-wt-600 pb-3'>Don't be shy !</h3>
                <p className='open-sans-font mb-3'>
                  Feel free to get in touch with me. I am always open to discussing new projects,
                  creative ideas or opportunities to be part of your visions.
                </p>
                <p className='open-sans-font custom-span-contact position-relative'>
                  <i className='fa fa-envelope-open position-absolute'></i>
                  <span className='d-block'>mail me</span>matt@murphy.com
                </p>
                <p className='open-sans-font custom-span-contact position-relative'>
                  <i className='fa fa-phone-square position-absolute'></i>
                  <span className='d-block'>call me</span>(888) 888-8888
                </p>
                <ul className='social list-unstyled pt-1 mb-5'>
                  <li className='facebook'>
                    <a title='Facebook' href='#'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li className='twitter'>
                    <a title='Twitter' href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li className='youtube'>
                    <a title='Youtube' href='#'>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                  <li className='dribbble'>
                    <a title='Dribbble' href='#'>
                      <i className='fa fa-dribbble'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
