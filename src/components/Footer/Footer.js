import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css';

function Footer() {
  return (
    <footer>


      <div className='footer bg-footer-pattern bg-white-300 pt-[65px] pb-20 lgscreen:pt-50 relative overflow-hidden'>
        <div className='footer-info text-center mb-25 relative before:content-[""] before:absolute before:top-[50%] before:left-0 before:w-full before:h-[1px] before:bg-blue-400 before:translate-y-minus_50'>
          <Link to="/" className='inline-block bg-white-300 px-40 mdscreen:px-20 relative'>
            <img src="../images/footer-logo.svg" width={110} height={83} className="lgscreen:mx-auto" loading="lazy" alt="Logo" />
          </Link>
        </div>
        <div className='container-fluid-md'>
          <div className='flex flex-wrap justify-center ipad:flex-col'>
            <div className='xl:w-10/12 lg:w-11/12 w-full'>
              <div className='footer-navbar pt-35'>
                <ul className='flex flex-wrap xlscreen:gap-x-5 gap-x-9 justify-center'>
                  <li><Link to="/">Stay</Link></li>
                  <li><Link to="/">Actvities</Link></li>
                  <li><Link to="/">Location</Link></li>
                  <li><Link to="/">Dining</Link></li>
                  <li><Link to="/">Our Story</Link></li>
                </ul>
                <ul className='flex flex-wrap gap-x-9 gap-y-5 xlscreen:gap-x-6 justify-center mt-20 mb-[38px] w-full max-w-[644px] mx-auto'>
                  <li><Link to="/">Travel tips</Link></li>
                  <li><Link to="/">Our stories</Link></li>
                  <li><Link to="/">meet the team</Link></li>
                  <li><Link to="/">Conservation & community</Link></li>
                  <li><Link to="/">Rates & Live availibility</Link></li>
                  <li><Link to="/">Offers</Link></li>
                  <li><Link to="/">gallery</Link></li>
                  <li><Link to="/">Contact us</Link></li>
                </ul>
              </div>
            </div>
            <div className='w-full'>
              <div className='footer-right text-center relative z-1'>
                <div className='btn-custom'>
                  <Link to="/" className='btn btn-blue-200'>
                    <span>
                      make an enquiry
                    </span>
                  </Link>
                </div>

                <div className='footer-contact flex flex-wrap xsscreen:flex-col items-center justify-center pt-40 pb-15 gap-4'>
                  <span>
                    <Link to="tel:+258 84 278 0071">+258 84 278 0071</Link>
                  </span>
                  <span className='xsscreen:!hidden'>|</span>
                  <span>
                    <Link to="mailto:info@colinaverdemoz.com">info@colinaverdemoz.com</Link>
                  </span>
                </div>
                <div className='sicon'>
                  <ul className='flex justify-center gap-x-2 ipad:justify-center'>
                    <li>
                      <Link to="/">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" loading="lazy">
                          <circle cx="12.5346" cy="12.5346" r="12.5346" fill="#618CAC" />
                          <path d="M13.2195 13.5217V17.8431H11.2344V13.5217H9.58521V11.7694H11.2344V11.1319C11.2344 8.76502 12.2231 7.52051 14.3151 7.52051C14.9565 7.52051 15.1168 7.62358 15.468 7.70757V9.44072C15.0748 9.37201 14.9641 9.33383 14.5556 9.33383C14.0708 9.33383 13.8112 9.47126 13.5745 9.74231C13.3378 10.0134 13.2195 10.4829 13.2195 11.1548V11.7732H15.468L14.8648 13.5255H13.2195V13.5217Z" fill="white" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" loading="lazy">
                          <circle cx="13.4655" cy="12.5346" r="12.5346" fill="#618CAC" />
                          <path d="M16.4105 17.1062H10.5204C9.70646 17.1062 9.0415 16.4413 9.0415 15.6273V9.73719C9.0415 8.92326 9.70646 8.2583 10.5204 8.2583H16.4105C17.2245 8.2583 17.8894 8.92326 17.8894 9.73719V15.6273C17.8894 16.4449 17.2281 17.1062 16.4105 17.1062Z" fill="white" />
                          <path d="M13.4673 14.9547C12.8605 14.9547 12.29 14.7185 11.8612 14.2897C11.4325 13.8609 11.1963 13.2904 11.1963 12.6836C11.1963 12.0768 11.4325 11.5063 11.8612 11.0776C12.29 10.6488 12.8605 10.4126 13.4673 10.4126C14.0741 10.4126 14.6446 10.6488 15.0734 11.0776C15.5022 11.5063 15.7383 12.0768 15.7383 12.6836C15.7383 13.2904 15.5022 13.8609 15.0734 14.2897C14.641 14.7185 14.0741 14.9547 13.4673 14.9547ZM13.4673 10.8959C12.4826 10.8959 11.6796 11.6953 11.6796 12.6836C11.6796 13.6683 12.479 14.4714 13.4673 14.4714C14.452 14.4714 15.2551 13.672 15.2551 12.6836C15.2514 11.6989 14.452 10.8959 13.4673 10.8959Z" fill="#618CAC" />
                          <path d="M16.1809 10.3384C16.4217 10.3384 16.617 10.1432 16.617 9.90236C16.617 9.66153 16.4217 9.46631 16.1809 9.46631C15.9401 9.46631 15.7449 9.66153 15.7449 9.90236C15.7449 10.1432 15.9401 10.3384 16.1809 10.3384Z" fill="#618CAC" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='newsletter py-[23px] bg-blue-200 bg-opacity-60'>
        <div className='container-fluid-md'>
          <div className='gform_wrapper'>
            <div className='flex flex-wrap items-center justify-start lgscreen:justify-center smscreen2:flex-col gap-6 xl:gap-10'>
              <div className='lgscreen:w-full lgscreen:text-center inline-block'>
                <div className='title title-white'>
                  <h6 className='big'>
                    Sign up to our newsletter
                  </h6>
                </div>
              </div>
              <div className='xl:max-w-[calc(100%_-_507px)] lg:max-w-[calc(100%_-_467px)] w-full'>
                <div className='gform_body w-full'>
                  <ul>
                    <li>
                      <div className='form-group flex flex-wrap'>
                        <input type="text" className='placeholder:text-white-100 placeholder:font-book placeholder:font-400 placeholder:text-12 placeholder:leading-16 placeholder:uppercase placeholder:text-opacity-95 pb-[8px] outline-none' placeholder='First Name' />
                      </div>
                    </li>
                    <li>
                      <div className='form-group flex flex-wrap'>
                        <input type="text" className='placeholder:text-white-100 placeholder:font-book placeholder:font-400 placeholder:text-12 placeholder:leading-16 placeholder:uppercase placeholder:text-opacity-95 pb-[8px] outline-none' placeholder='Last Name' />
                      </div>
                    </li>
                    <li>
                      <div className='form-group flex flex-wrap'>
                        <input type="text" className='placeholder:text-white-100 placeholder:font-book placeholder:font-400 placeholder:text-12 placeholder:leading-16 placeholder:uppercase placeholder:text-opacity-95 pb-[8px] outline-none' placeholder='Email address' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='gform_footer'>
                <button className="btn btn-white cursor-pointer">
                  <span>
                    sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer