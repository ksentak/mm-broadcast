import React, { Component } from 'react';

class SampleWork extends Component {
  render() {
    return (
      <div className='portfolio'>
        <section className='title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1'>
          <h1>
            SAMPLE <span>WORK</span>
          </h1>
        </section>
        <section className='main-content text-center revealator-slideup revealator-once revealator-delay1'>
          <div id='grid-gallery' className='container grid-gallery'>
            <section className='grid-wrap'>
              <ul className='row grid'>
                <li>
                  <figure>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio' />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio' />
                    <div>
                      <span>Youtube Project</span>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio' />
                    <div>
                      <span>Slider Project</span>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio' />
                    <div>
                      <span>Local Video Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio' />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio' />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>
              </ul>
            </section>

            <section className='slideshow'>
              <ul>
                <li>
                  <figure>
                    <figcaption>
                      <h3>Image Project</h3>
                      <div className='row open-sans-font'>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          <span className='project-label'>Project </span>:
                          <span className='ft-wt-600 uppercase'>Website</span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-12 col-sm-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>
                            <a href='#' target='_blank'>
                              Broadcast
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>

                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio Item 1' />
                  </figure>
                </li>

                <li>
                  <figure>
                    <figcaption>
                      <h3>Youtube Project</h3>
                      <div className='row open-sans-font'>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          <span className='project-label'>Preview </span>:
                          <span className='ft-wt-600 uppercase'>
                            <a href='#' target='_blank'>
                              Broadcast
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>

                    <div className='videocontainer'>
                      <iframe
                        className='youtube-video'
                        src='https://www.youtube.com/embed/TZts3N1oSA4'
                        allowfullscreen
                      ></iframe>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <figcaption>
                      <h3>Slider Project</h3>
                      <div className='row open-sans-font'>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>
                            <a href='#' target='_blank'>
                              Broadcast
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>

                    <div
                      id='slider'
                      className='carousel slide portfolio-slider'
                      data-ride='carousel'
                      data-interval='false'
                    >
                      <ol className='carousel-indicators'>
                        <li data-target='#slider' data-slide-to='0' className='active'></li>
                        <li data-target='#slider' data-slide-to='1'></li>
                        <li data-target='#slider' data-slide-to='2'></li>
                      </ol>
                      <div className='carousel-inner'>
                        <div className='carousel-item active'>
                          <img
                            src='http://via.placeholder.com/895x552.jpg'
                            alt='Portfolio Item 4 (1)'
                          />
                        </div>
                        <div className='carousel-item'>
                          <img
                            src='http://via.placeholder.com/895x552.jpg'
                            alt='Portfolio Item 4 (2)'
                          />
                        </div>
                        <div className='carousel-item'>
                          <img
                            src='http://via.placeholder.com/895x552.jpg'
                            alt='Portfolio Item 4 (3)'
                          />
                        </div>
                      </div>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <figcaption>
                      <h3>Local Video Project</h3>
                      <div className='row open-sans-font'>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>
                            <a href='#' target='_blank'>
                              Broadcast
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>

                    <video
                      id='video'
                      className='responsive-video'
                      controls
                      poster='http://via.placeholder.com/895x552.jpg'
                    >
                      <source src='path_to_your_video' type='video/mp4' />
                    </video>
                  </figure>
                </li>

                <li>
                  <figure>
                    <figcaption>
                      <h3>Image Project</h3>
                      <div className='row open-sans-font'>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>
                            <a href='#' target='_blank'>
                              Broadcast
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio Item 5' />
                  </figure>
                </li>

                <li>
                  <figure>
                    <figcaption>
                      <h3>Image Project</h3>
                      <div className='row open-sans-font'>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-file-text-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-user-o pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-code pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>Broadcast</span>
                        </div>
                        <div className='col-6 mb-2'>
                          <i className='fa fa-external-link pr-2'></i>
                          <span className='project-label'>Broadcast </span>:
                          <span className='ft-wt-600 uppercase'>
                            <a href='#' target='_blank'>
                              Broadcast
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>

                    <img src='http://via.placeholder.com/895x552.jpg' alt='Portfolio Item 6' />
                  </figure>
                </li>
              </ul>
              <nav>
                <span className='icon nav-prev'>
                  <img src='img/projects/navigation/left-arrow.png' alt='previous' />
                </span>
                <span className='icon nav-next'>
                  <img src='img/projects/navigation/right-arrow.png' alt='next' />
                </span>
                <span className='nav-close'>
                  <img src='img/projects/navigation/close-button.png' alt='close' />
                </span>
              </nav>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default SampleWork;
