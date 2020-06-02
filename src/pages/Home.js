import React from 'react';

const Home = () => {
  return (
    <div className='home'>
      <section className='container-fluid main-container container-home p-0'>
        <div className='color-block d-none d-lg-block'></div>
        <div className='row home-details-container align-items-center'>
          <div className='col-lg-4 bg position-fixed d-none d-lg-block'></div>
          <div className='col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left'>
            <div>
              <img
                src='http://via.placeholder.com/300x300.jpg'
                className='img-fluid main-img-mobile d-none d-sm-block d-lg-none'
                alt='Profile Headshot'
              />
              <h1 className='text-uppercase poppins-font'>
                <span>Matt </span>Murphy
              </h1>
              <p className='open-sans-font'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda!
                Veritatis veniam quibusdam consequatur, sequi eligendi hic voluptate? Sunt totam
                vitae, facere quaerat quisquam nam ullam autem possimus minus quos.
              </p>
              <a href='/about' className='btn btn-about'>
                more about me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
