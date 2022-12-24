import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import SimpleCarousel from '../components/carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const howWork = [
  {
    icon: "/icons/card1.png",
    title: 'Define the problem',
    desc: 'Lorem Ipsum is simply dummy text  in the Lorem Ipsum text format. Lorem Ipsum is a Lorem Ipsum text format  that is used to represent'
  },
  {
    icon: "/icons/card2.png",
    title: 'Develop a Solution',
    desc: 'Lorem Ipsum is simply dummy text  in the Lorem Ipsum text format. Lorem Ipsum is a Lorem Ipsum text format  that is used to represent'
  },
  {
    icon: "/icons/card3.png",
    title: 'Refine',
    desc: 'Lorem Ipsum is simply dummy text  in the Lorem Ipsum text format. Lorem Ipsum is a Lorem Ipsum text format  that is used to represent'
  },
]

const Index = () => {
  return (
    <>
      <Header />
      {/* -----banner section --------- */}
      <section className='main-banner container'>
        <p className='text-center'>THE FUTURE BELONGS TO YOU </p>
        <div >
          <h1 style={{ fontSize: '4rem' }}>Why <span className="app-text-color">ifStatic</span>?</h1>
        </div >
        <div className='w-100 ' style={{ height: "600px" }}>
          <div className='w-100 h-100 banner-container'>
            <div className='col-5 p-5 position-absolute right-0 bottom-0' id='unsubscribe-btn'>
              <img src="/images/unsubscribe-btn.png" alt="" />
            </div>
            <div className=' position-absolute d-flex justify-content-end' style={{ right: 0, top: "80px" }}>
              <img src="/images/banner-image1.png " alt=""  className=' banner-container-main-img'/>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      {/* ------ technology belong section ------------ */}
      <section className="tech-belong container">
        <div >
          <h1>Technology belongs to <span className='tech-belong-gredient'>everyone</span></h1>
        </div>
        <div style={{ height: '50vh' }}>
        </div>

      </section>
      <section className="how-it-works container">
        <h3 className='text-center'>How it Works</h3>
        <br />
        <br />
        <div className='d-flex justify-content-evenly flex-wrap how-it-works-allCards '>
          {
            howWork.map((item, index) => (
              <div className='how-it-works-card   '>
                <div className='how-it-works-logo-card d-flex-center '>
                  <img src={item?.icon || '/icons/Search.png'} alt='' className='how-it-works-logo' />
                </div>
                <div className='mt-4 d-flex flex-column'>
                  <h4>{item?.title}</h4>
                  <div className='mt-3' style={{ fontSize: '13px' }}>{item?.desc}</div>
                </div>
              </div>
            ))
          }
        </div>
        <br />
        <div className='text-center d-flex-center  '>
          <div style={{ fontSize: '17px' }}>Learn more</div>
          <div className='mx-1 py-2 learn-more-icon'>
            <img src={'/icons/more-icon.png'} alt='' width={15} className='' />
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="customer-says container  ">
        <h3 className='mb-5 text-center'>What our great customer say</h3>
        <SimpleCarousel
        >
          {[1, 2, 3].map((item, index) => (
            <div className=' customer-says-card '>
              <div className=' col-10 customer-says-card-item  flex-column  flex-md-row'>
                <div className='col-md-3'>
                  <img src='/images/user.png' atl='' width={150} height={150} className='rounded-circle' />
                </div>
                <div className=' col-md-7 col-lg-9'>
                  <p className=' customer-says-desc'>
                    IfStatic demonstrates an excellant understanding of user needs and all of their design are creative and elegant in their simplicity.
                  </p>
                  <div className='mt-4 '  >
                    <div className='fw-bold' style={{ color: "#800080" }} >
                      Jame gole
                    </div>
                    <div className='mt-1' style={{ fontSize: '12px' }}>
                      CEO of India.com
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
              sad
            </div> */}
            </div>
          ))}


        </SimpleCarousel>
      </section>
      <div style={{ height: '40vh' }}>

      </div>
      <Footer />


    </>
  )
}

export default Index