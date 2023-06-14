import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';

import Modal from "react-modal";
import ReactPlayer from "react-player";

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Autoplay } from "swiper";

function Story() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal(data) {
		document.body.classList.add("modal-open");
		setIsOpen(true);
	}

	function closeModal() {
		document.body.classList.remove("modal-open");
		setIsOpen(false);
	}

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			// width: "930px",
			padding: "0",
			border: "0",
			borderRadius: "0",
			width: "100%",
			height: "100%",
			backgroundColor: "black",
		},
		overlay: {
			zIndex: "99",
		},
	};

    const handleNextClick = (selector) => {
		const swiper = document.querySelector(selector).swiper;
		swiper.slideNext();
	}
	const handlePrevClick = (selector) => {
		const swiper = document.querySelector(selector).swiper;
		swiper.slidePrev();
	}
	return (
		<React.Fragment>
			<Header></Header>

			{/* Banner Start */}
			<section className="banner-wrapper small-banner relative">
				<div className="banner-img w-full h-full block relative overflow-hidden">
					<div className='img landscape'>
						<img src="../images/story-banner.jpg" className='w-full h-full object-cover' width={1440} height={838} alt="Our Story" loading='eager' />
					</div>
				</div>
				<div className="banner-content flex flex-col justify-end items-center w-full h-full z-1 absolute top-0 left-0">
					<div className='container-fluid text-center w-full'>
						<div className='banner-heading'>
							<h1 className="text-white-100 font-400 font-primary">Our Story</h1>
						</div>
						<div className='content white w-full md:max-w-[696px] mx-auto mb-25'>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
								
			</section>
			{/* Banner End */}

            {/* zigzagsingleslider Start */}
			<section className='zigzag-content left-img bg-white-300 py-100 lgscreen:py-50'>
				<div className='container-fluid-md'>
					<div className='flex flex-wrap items-center w-full m-0 p-0 relative lg:gap-0 gap-8'>
						<div className='w-full lg:w-6/12 lg:order-1 order-1'>
							<div className='img portrait'>
								<img src="../images/a-unique-culinary-experience.jpg" width={635} height={631} loading="lazy" alt="Your luxury home in Africa" />
							</div>
						</div>
						<div className='w-full lg:w-6/12 lg:order-2 order-2'>
							<div className='max-w-[473px] xlscreen:max-w-[325px] lgscreen:max-w-full mx-auto'>
								<div className='title title-blue-100 mb-25 lgscreen:mb-15'>
									<h2>
										Your luxury home in Africa
									</h2>
								</div>
								<div className='content blue-100 mb-40 last:mb-0'>
									<p>
										Everyday life can be overwhelming...Overstimulating... Overbearing...But this isn’t your everyday. It’s an escape — A home built just for you. A place to recharge, rethink, and replenish your soul. Somewhere safe for you to daydream, inhale and exhale.It’s a space for discovery — to connect to (or disconnect from) everything and everyone, all at once. A place for you to stay grounded or free-fall into the unknown.It’s a community — built from the hands and knowledge of those who greet you at the door. Our family, our friends.
									</p>
									<p>
										This is Colina Verde
									</p>
								</div>
								<div className='btn-custom flex flex-wrap items-center justify-start w-full gap-5 md:gap-[30px]'>
									<Link to="#" className='btn btn-blue-200 smscreen:order-2'>
										<span>
                                            make an enquiry
										</span>
									</Link>
									<Button className='btn btn-blue-200-link smscreen:order-1 mt-[9px] !flex flex-wrap items-center gap-[5px]'  onClick={() => { openModal(); }}>
										Watch our video
									</Button>
									<Modal
										isOpen={modalIsOpen}
										style={customStyles}
										onRequestClose={closeModal}
										contentLabel="Example Modal"
									>
										<div className='video-modal-popup h-full'>
											<button onClick={closeModal} className="absolute z-1 right-50 top-50 bg-white-100 flex items-center justify-center w-50 h-50 rounded-100">
												<img src="../images/close.svg" width={21} height={16} />
											</button>
											<div className="flex flex-wrap items-center w-full h-full">
												<div className="w-full h-full">
													<div className="modal-video h-full">
														<ReactPlayer
															className="modal-banner-video !w-full !h-full"
															loop={true}
															playing={true}
															controls={false}
															muted={true}
															url={"https://www.youtube.com/watch?v=tu4cG_BKTZs"}
														/>
													</div>
												</div>
											</div>
										</div>
									</Modal>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* zigzagsingleslider End */}

			{/* zigzagsingleslider Start */}
			<section className='zigzag-content right-img py-50 my-50 lgscreen:my-25 lgscreen:py-25'>
				<div className='container-fluid-md'>
					<div className='flex flex-wrap items-center w-full m-0 p-0 relative lg:gap-0 gap-8'>
						<div className='w-full lg:w-6/12 lg:order-2 order-1'>
							<div className='img portrait'>
								<img src="../images/Meet-our-incredible-colina-Verde-team.jpg" width={635} height={631} loading="lazy" alt="Meet our incredible colina Verde team" />
							</div>
						</div>
						<div className='w-full lg:w-6/12 lg:order-1 order-2'>
							<div className='max-w-[473px] xlscreen:max-w-[325px] lgscreen:max-w-full mx-auto'>
								<div className='title title-blue-100 mb-25 lgscreen:mb-15'>
									<h2>
										Meet our incredible colina Verde team
									</h2>
								</div>
								<div className='content blue-100 mb-40 last:mb-0'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* zigzagsingleslider End */}

			{/* collection slider Start */}
			<section className='fullbx-slider fullbx-m-none relative overflow-hidden'>
                <Swiper
					initialSlide={2}
					spaceBetween={30}
					loop={true}
					slidesPerGroup={1}
					slideToClickedSlide={true}
					slidesPerView={'3'}
					centeredSlides={true}
					centeredSlidesBounds={true}
					navigation={false}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 3,
						},
						991: {
							slidesPerView: 3,
						},
					}}
					modules={[EffectCoverflow, Navigation, Autoplay]}
					className="storySlider">
					<SwiperSlide>
						<div className='slide-box'>
							<img src='../images/story-slide1.jpg' width={389} height={458} loading="lazy" alt="experienceslide"/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slide-box'>
							<img src='../images/story-slide2.jpg' width={389} height={458} loading="lazy" alt="experienceslide"/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slide-box'>
							<img src='../images/story-slide3.jpg' width={389} height={458} loading="lazy" alt="experienceslide"/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slide-box'>
							<img src='../images/story-slide4.jpg' width={389} height={458} loading="lazy" alt="experienceslide"/>
						</div>
					</SwiperSlide>
					<div className='swiper-arrow'>
						<a className='button-prev cursor-pointer absolute top-50per translate-y-minus_50 z-9 left-[70px] mdscreen:left-20 smscreen2:left-20' onClick={() => handlePrevClick(".fullbx-slider .swiper")} >
							<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="28" cy="28" r="28" transform="rotate(180 28 28)" fill="#224554" fill-opacity="0.2"/>
								<circle cx="28" cy="28" r="27.5" transform="rotate(180 28 28)" stroke="white" stroke-opacity="0.6" fill='transparent'/>
								<path d="M25.6008 23.0626C25.6484 22.9199 25.4106 23.1101 25.4581 22.9674C26.0765 22.6345 26.4095 22.2539 27.1706 22.1112C27.2181 22.1112 27.2181 22.0161 27.2181 21.9685C28.0268 21.6831 28.6927 21.1599 29.3111 20.7317C29.3111 20.6842 29.216 20.7793 29.1209 20.8269C29.1209 20.589 29.3587 20.6842 29.4538 20.5415C29.9771 20.5415 30.0722 20.1609 30.4528 20.0182C30.5479 20.0182 30.3576 19.9707 30.4052 19.9231C31.2614 19.5901 31.7847 18.8766 32.736 18.6863L32.736 19.162C32.8312 19.2571 32.8787 18.8766 32.9263 19.0193C32.9263 19.162 32.9263 19.2571 32.8787 19.3523C33.0214 19.3998 33.0214 19.2571 33.1641 19.2571C33.1641 19.3998 33.069 19.4474 33.0214 19.495C33.069 19.5901 33.1641 19.5901 33.3068 19.5425C33.2117 19.6377 33.1641 19.6852 33.1641 19.7328C33.3068 19.7328 33.3544 19.6852 33.4496 19.6852C33.2117 20.7317 32.2128 21.1599 31.4041 21.8734C31.1187 21.9209 31.0711 22.1112 30.7382 22.2064C28.4073 23.9188 26.0289 25.5361 23.0322 26.8204C23.6981 27.3437 24.4592 27.6767 25.03 28.2475C25.2203 28.1999 25.2203 28.4378 25.4106 28.3902C25.4106 28.5805 25.6484 28.5329 25.6484 28.7232L26.4571 29.1988C26.1716 28.9134 25.9814 28.5329 25.5533 28.3426C25.9338 28.3902 26.3143 28.5805 26.5522 28.8183L26.7425 28.8659L33.1166 32.9567C33.402 33.6702 33.0214 34.1459 32.9263 34.7167C32.8787 34.7167 32.8312 34.7167 32.7836 34.7643C32.7836 35.0021 32.5458 35.3827 32.2604 35.573C31.9274 35.6681 31.8798 35.9535 31.4993 35.8584C27.8841 33.7178 24.7446 31.1491 21.4148 28.6756L21.2246 28.6756C21.0343 28.3426 20.6538 28.3426 20.5586 27.9145C20.5111 27.9145 20.3683 27.8669 20.2732 27.7718C20.1305 26.868 20.7965 26.6302 21.0819 25.9642C21.0343 25.1556 21.8905 24.9177 22.4613 24.442C23.3176 24.1091 24.0787 23.681 25.0776 23.3956C25.1251 23.2528 25.363 23.1577 25.6008 23.0626Z" fill="white"/>
							</svg>
						</a>
						<a className='button-next cursor-pointer absolute top-50per translate-y-minus_50 z-9 right-[70px] mdscreen:right-20 smscreen2:right-20' onClick={() => handleNextClick(".fullbx-slider .swiper")} >
							<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="28" cy="28" r="28" fill="#224554" fill-opacity="0.2"/>
								<circle cx="28" cy="28" r="27.5" stroke="white" stroke-opacity="0.6" fill='transparent'/>
								<path d="M30.3992 32.9374C30.3516 33.0801 30.5894 32.8899 30.5419 33.0326C29.9235 33.3655 29.5905 33.7461 28.8294 33.8888C28.7819 33.8888 28.7819 33.9839 28.7819 34.0315C27.9732 34.3169 27.3072 34.8401 26.6889 35.2683C26.6889 35.3158 26.784 35.2207 26.8791 35.1731C26.8791 35.411 26.6413 35.3158 26.5462 35.4585C26.0229 35.4585 25.9278 35.8391 25.5472 35.9818C25.4521 35.9818 25.6424 36.0293 25.5948 36.0769C24.7386 36.4099 24.2153 37.1234 23.264 37.3137L23.264 36.838C23.1688 36.7429 23.1213 37.1234 23.0737 36.9807C23.0737 36.838 23.0737 36.7429 23.1213 36.6477C22.9786 36.6002 22.9786 36.7429 22.8359 36.7429C22.8359 36.6002 22.931 36.5526 22.9786 36.505C22.931 36.4099 22.8359 36.4099 22.6932 36.4575C22.7883 36.3623 22.8359 36.3148 22.8359 36.2672C22.6932 36.2672 22.6456 36.3148 22.5504 36.3148C22.7883 35.2683 23.7872 34.8401 24.5959 34.1266C24.8813 34.0791 24.9288 33.8888 25.2618 33.7936C27.5927 32.0812 29.9711 30.4639 32.9678 29.1796C32.3019 28.6563 31.5408 28.3233 30.97 27.7525C30.7797 27.8001 30.7797 27.5622 30.5894 27.6098C30.5894 27.4195 30.3516 27.4671 30.3516 27.2768L29.5429 26.8012C29.8284 27.0866 30.0186 27.4671 30.4467 27.6574C30.0662 27.6098 29.6857 27.4195 29.4478 27.1817L29.2575 27.1341L22.8834 23.0433C22.598 22.3298 22.9786 21.8541 23.0737 21.2833C23.1213 21.2833 23.1688 21.2833 23.2164 21.2357C23.2164 20.9979 23.4542 20.6173 23.7396 20.427C24.0726 20.3319 24.1202 20.0465 24.5007 20.1416C28.1159 22.2822 31.2554 24.8509 34.5852 27.3244L34.7754 27.3244C34.9657 27.6574 35.3462 27.6574 35.4414 28.0855C35.4889 28.0855 35.6317 28.1331 35.7268 28.2282C35.8695 29.132 35.2035 29.3698 34.9181 30.0358C34.9657 30.8444 34.1095 31.0823 33.5387 31.558C32.6824 31.8909 31.9213 32.319 30.9224 32.6044C30.8748 32.7472 30.637 32.8423 30.3992 32.9374Z" fill="white"/>
							</svg>
						</a>
					</div>
				</Swiper>
			</section>
			{/* collection slider End */}

			{/* explore grid Start */}
            <section className='explore-grid bg-white-300 py-100 lgscreen:py-50'>
                <div className='container-fluid-md'>
                    <div className='flex flex-wrap items-center justify-center w-full m-0 p-0'>
                        <div className='title title-blue-200 mb-50 lgscreen:mb-30'>
                            <h2 className='big'>
                                Explore Colina Verde
                            </h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mdscreen:grid-cols-1 relative w-full m-0 p-0 gap-7 lgscreen:gap-10'>
                        <div className='card'>
                            <div className='img landscape mb-[30px]'>
                                <img src='../images/stay1.jpg' width={635} height={348} loading="lazy"  alt=''/>
                            </div>
                            <div className='flex flex-col w-full m-0 p-0 items-center justify-center text-center relative'>
                                <div className='title title-blue-200 mb-[12px]'>
                                    <h2>
										Stay
                                    </h2>
                                </div>
                                <div className='content blue-100 mb-30 last:mb-0 mx-auto w-full max-w-[412px]'>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                                <div className='btn-custom'>
                                    <Link to='/'className='btn btn-blue-200-link'>
										Explore your stay
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='img landscape mb-[30px]'>
                                <img src='../images/ex-activities.jpg' width={635} height={348} loading="lazy"  alt=''/>
                            </div>
                            <div className='flex flex-col w-full m-0 p-0 items-center justify-center text-center relative'>
                                <div className='title title-blue-200 mb-[12px]'>
                                    <h2>
                                        Activities
                                    </h2>
                                </div>
                                <div className='content blue-100 mb-30 last:mb-0 mx-auto w-full max-w-[412px]'>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                                <div className='btn-custom'>
                                    <Link to='/'className='btn btn-blue-200-link'>
                                        Explore location
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* explore grid End */}			

			{/* followus Start */}
			<section className='followus py-100 lgscreen:py-50'>
				<div className='container-fluid'>
					<div className='flex flex-col items-center lg:items-start w-full m-0 lg:mb-60 mb-25 p-0 relative before:content-[""] before:absolute before:top-[50%] before:w-full before:h-[1px] before:bg-shellGold before:translate-y-minus_50 before:-z-1'>
						<div className='title title-shellGold bg-white-100 px-10 lg:px-[44px] lg:pl-0'>
							<h2>
								Follow our journey
							</h2>
						</div>
					</div>
					<Swiper 
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						slidesPerView={1}
						speed={1500} 
						breakpoints={{
							320: {
							  slidesPerView: 1.12,
							  spaceBetween: 15,
							},
							640: {
								slidesPerView: 1.5,
								spaceBetween: 30,
							  },
							768: {
							  slidesPerView: 2.1,
							  spaceBetween: 30,
							},
							1024: {
							  slidesPerView: 3,
							  spaceBetween: 30,
							},
						  }}
						modules={[Autoplay]} 
						className="mySwiper">
						<SwiperSlide>
							<div className='card relative'>
								<Link to='https://www.instagram.com/colinaverdemoz/?hl=en' className='img portrait'>
									<img src='../images/insta1.jpg' alt='instagram' width={413} height={413} loading='lazy' />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='card relative'>
								<Link to='https://www.instagram.com/colinaverdemoz/?hl=en' className='img portrait'>
									<img src='../images/insta2.jpg' alt='instagram' width={413} height={413} loading='lazy' />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>							
							<div className='card relative'>
								<Link to='https://www.instagram.com/colinaverdemoz/?hl=en' className='img portrait'>
									<img src='../images/insta3.jpg' alt='instagram' width={413} height={413} loading='lazy' />
								</Link>
							</div>
						</SwiperSlide>
						<div className='swiper-arrow lg:hidden'>
							<a className='button-prev cursor-pointer absolute top-50per translate-y-minus_50 z-9 left-[70px] mdscreen:left-20 smscreen2:left-20' onClick={() => handlePrevClick(".followus .swiper")} >
								<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="28" cy="28" r="28" transform="rotate(180 28 28)" fill="#224554" fill-opacity="0.2"/>
									<circle cx="28" cy="28" r="27.5" transform="rotate(180 28 28)" stroke="white" stroke-opacity="0.6"/>
									<path d="M25.6008 23.0626C25.6484 22.9199 25.4106 23.1101 25.4581 22.9674C26.0765 22.6345 26.4095 22.2539 27.1706 22.1112C27.2181 22.1112 27.2181 22.0161 27.2181 21.9685C28.0268 21.6831 28.6927 21.1599 29.3111 20.7317C29.3111 20.6842 29.216 20.7793 29.1209 20.8269C29.1209 20.589 29.3587 20.6842 29.4538 20.5415C29.9771 20.5415 30.0722 20.1609 30.4528 20.0182C30.5479 20.0182 30.3576 19.9707 30.4052 19.9231C31.2614 19.5901 31.7847 18.8766 32.736 18.6863L32.736 19.162C32.8312 19.2571 32.8787 18.8766 32.9263 19.0193C32.9263 19.162 32.9263 19.2571 32.8787 19.3523C33.0214 19.3998 33.0214 19.2571 33.1641 19.2571C33.1641 19.3998 33.069 19.4474 33.0214 19.495C33.069 19.5901 33.1641 19.5901 33.3068 19.5425C33.2117 19.6377 33.1641 19.6852 33.1641 19.7328C33.3068 19.7328 33.3544 19.6852 33.4496 19.6852C33.2117 20.7317 32.2128 21.1599 31.4041 21.8734C31.1187 21.9209 31.0711 22.1112 30.7382 22.2064C28.4073 23.9188 26.0289 25.5361 23.0322 26.8204C23.6981 27.3437 24.4592 27.6767 25.03 28.2475C25.2203 28.1999 25.2203 28.4378 25.4106 28.3902C25.4106 28.5805 25.6484 28.5329 25.6484 28.7232L26.4571 29.1988C26.1716 28.9134 25.9814 28.5329 25.5533 28.3426C25.9338 28.3902 26.3143 28.5805 26.5522 28.8183L26.7425 28.8659L33.1166 32.9567C33.402 33.6702 33.0214 34.1459 32.9263 34.7167C32.8787 34.7167 32.8312 34.7167 32.7836 34.7643C32.7836 35.0021 32.5458 35.3827 32.2604 35.573C31.9274 35.6681 31.8798 35.9535 31.4993 35.8584C27.8841 33.7178 24.7446 31.1491 21.4148 28.6756L21.2246 28.6756C21.0343 28.3426 20.6538 28.3426 20.5586 27.9145C20.5111 27.9145 20.3683 27.8669 20.2732 27.7718C20.1305 26.868 20.7965 26.6302 21.0819 25.9642C21.0343 25.1556 21.8905 24.9177 22.4613 24.442C23.3176 24.1091 24.0787 23.681 25.0776 23.3956C25.1251 23.2528 25.363 23.1577 25.6008 23.0626Z" fill="white"/>
								</svg>
							</a>
							<a className='button-next cursor-pointer absolute top-50per translate-y-minus_50 z-9 right-[70px] mdscreen:right-20 smscreen2:right-20' onClick={() => handleNextClick(".followus .swiper")} >
								<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="28" cy="28" r="28" fill="#224554" fill-opacity="0.2"/>
									<circle cx="28" cy="28" r="27.5" stroke="white" stroke-opacity="0.6"/>
									<path d="M30.3992 32.9374C30.3516 33.0801 30.5894 32.8899 30.5419 33.0326C29.9235 33.3655 29.5905 33.7461 28.8294 33.8888C28.7819 33.8888 28.7819 33.9839 28.7819 34.0315C27.9732 34.3169 27.3072 34.8401 26.6889 35.2683C26.6889 35.3158 26.784 35.2207 26.8791 35.1731C26.8791 35.411 26.6413 35.3158 26.5462 35.4585C26.0229 35.4585 25.9278 35.8391 25.5472 35.9818C25.4521 35.9818 25.6424 36.0293 25.5948 36.0769C24.7386 36.4099 24.2153 37.1234 23.264 37.3137L23.264 36.838C23.1688 36.7429 23.1213 37.1234 23.0737 36.9807C23.0737 36.838 23.0737 36.7429 23.1213 36.6477C22.9786 36.6002 22.9786 36.7429 22.8359 36.7429C22.8359 36.6002 22.931 36.5526 22.9786 36.505C22.931 36.4099 22.8359 36.4099 22.6932 36.4575C22.7883 36.3623 22.8359 36.3148 22.8359 36.2672C22.6932 36.2672 22.6456 36.3148 22.5504 36.3148C22.7883 35.2683 23.7872 34.8401 24.5959 34.1266C24.8813 34.0791 24.9288 33.8888 25.2618 33.7936C27.5927 32.0812 29.9711 30.4639 32.9678 29.1796C32.3019 28.6563 31.5408 28.3233 30.97 27.7525C30.7797 27.8001 30.7797 27.5622 30.5894 27.6098C30.5894 27.4195 30.3516 27.4671 30.3516 27.2768L29.5429 26.8012C29.8284 27.0866 30.0186 27.4671 30.4467 27.6574C30.0662 27.6098 29.6857 27.4195 29.4478 27.1817L29.2575 27.1341L22.8834 23.0433C22.598 22.3298 22.9786 21.8541 23.0737 21.2833C23.1213 21.2833 23.1688 21.2833 23.2164 21.2357C23.2164 20.9979 23.4542 20.6173 23.7396 20.427C24.0726 20.3319 24.1202 20.0465 24.5007 20.1416C28.1159 22.2822 31.2554 24.8509 34.5852 27.3244L34.7754 27.3244C34.9657 27.6574 35.3462 27.6574 35.4414 28.0855C35.4889 28.0855 35.6317 28.1331 35.7268 28.2282C35.8695 29.132 35.2035 29.3698 34.9181 30.0358C34.9657 30.8444 34.1095 31.0823 33.5387 31.558C32.6824 31.8909 31.9213 32.319 30.9224 32.6044C30.8748 32.7472 30.637 32.8423 30.3992 32.9374Z" fill="white"/>
								</svg>
							</a>
						</div>
					</Swiper>
					<div className='content mt-20'>
						<Link to='https://www.instagram.com/colinaverdemoz/?hl=en' className='font-secondary_normal font-400 text-shellGold text-16 leading-22'>
							@colinaverdemoz
						</Link>
					</div>
				</div>
			</section>
			{/* followus End */}

			<Footer></Footer>
		</React.Fragment>
	);
}

export default Story