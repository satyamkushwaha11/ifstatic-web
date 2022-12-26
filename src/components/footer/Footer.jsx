import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className=" position-relative footer_container" >
            <div className=' d-flex justify-content-center'>
                <div className='top-0 footer-card d-flex-center' >
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='text-white mb-3'>Ready for your project</h1>
                        <button className='header-contact-btn mt-4' >
                            Get in touch
                        </button>
                    </div>
                  
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='text-white container footer-main pb-3'>
                <div className='w-100 d-flex flex-column flex-md-row justify-content-between align-items-center'>
                    <div className='header-left'>
                        <img src='/icons/ifStatic.png' className='app-logo' />
                    </div>
                    <div className='mx-md-3'>
                        <ul className='d-flex footer-opt' type='none'>
                            <li>Home</li>
                            <li>Free Ui Trial</li>
                            <li>Portfolio</li>
                            <li>Service</li>
                        </ul>
                        <div className='d-flex  justify-content-end mt-5 '> 
                           <img src="/icons/facebook.png " alt="" className='mx-3 p-1 footer-social-logo '/>
                           <img src="/icons/Instagram.png " alt="" className='mx-3 p-1 footer-social-logo '/>
                           <img src="/icons/linkdin.png " alt="" className='mx-3 p-1 footer-social-logo '/>
                           <img src="/icons/twitter.png " alt="" className='mx-3 p-1 footer-social-logo '/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer