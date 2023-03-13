import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import BlogCard from '../components/blog-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mirror self help</title>
        <meta property="og:title" content="Mirror self help" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">
                Transform Your Life Today: Mirror Self-Help Centre
              </h1>
              <span className="home-text01">
                self appreciation at it&apos;s finest
              </span>
              <button className="home-primary button-primary button-lg button">
                Get in touch with us
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1678356717973-f2177782388a?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3ODQzNTE0Mw&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image"
                />
              </div>
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1678228987283-a82512afce73?ixid=Mnw5MTMyMXwwfDF8YWxsfDI0fHx8fHx8Mnx8MTY3ODQzNTE0Mw&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image01"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1678314529373-61e0d5309e72?ixid=Mnw5MTMyMXwwfDF8YWxsfDE4fHx8fHx8Mnx8MTY3ODQzNTE0Mw&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image02"
                />
              </div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1678297405555-c2816eccdd00?ixid=Mnw5MTMyMXwwfDF8YWxsfDIwfHx8fHx8Mnx8MTY3ODQzNTE0Mw&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image03"
                />
                <div className="home-container04">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                    className="home-image04"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
                    className="home-image05"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <span className="home-text02">our services</span>
                <h2 className="Heading2">
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-cards-container">
              <ServicesCard></ServicesCard>
              <div className="services-card">
                <div className="home-container05">
                  <img
                    alt="image"
                    src="/playground_assets/file-document-200w.png"
                    className="home-image06"
                  />
                </div>
                <span className="home-text07">support groups</span>
                <span className="home-text08">
                  Find people just like you to share experiences and communicate
                  with to make for a more impactful experience
                </span>
                <span className="home-text09">Learn more</span>
              </div>
              <div className="services-card">
                <div className="home-container06">
                  <img
                    alt="image"
                    src="/playground_assets/dice-5-200h.png"
                    className="home-image07"
                  />
                </div>
                <span className="home-text10">Educate Yourslef</span>
                <span className="home-text11">
                  Get a high-quality consultancy to teach and guide you on the
                  ways of becoming a better person
                </span>
                <span className="home-text12">Learn more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <span className="home-text13">our work</span>
              <h2 className="home-text14">Meet Our World</h2>
              <span className="home-text15">
                All of our services are led by experienced and compassionate
                professionals who are committed to helping you reach your goals.
              </span>
              <button className="button-secondary button-lg button">
                See all projects
              </button>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text16 tab-selector-btn">Love</span>
              <span className="home-text17 tab-selector-btn">
                Understanding
              </span>
              <span className="home-text18 tab-selector-btn">Creativity</span>
              <span className="home-text19 tab-selector-btn">Peace</span>
              <span className="home-text20 tab-selector-btn">Hope</span>
              <span className="tab-selector-btn">Faith</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <div className="home-speaker-card">
                <div className="home-image-container">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxibGFjayUyMGJveXxlbnwwfHx8fDE2Nzg0MzY2NzQ&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="home-image08"
                  />
                </div>
                <span className="home-first-name">
                  support groups-a new and fun way to handle your problems
                </span>
              </div>
              <div className="home-speaker-card1">
                <div className="home-image-container1">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxoZWFsdGh5fGVufDB8fHx8MTY3ODQzNzE0Mw&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="home-image09"
                  />
                </div>
                <span className="home-first-name1">
                  Healthy Eating does work
                </span>
              </div>
              <div className="home-speaker-card2">
                <div className="home-image-container2">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGZyaWVuZHN8ZW58MHx8fHwxNjc4NDM3MTk5&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="home-image10"
                  />
                </div>
                <span className="home-first-name2">
                  Group of friends that went through our program
                </span>
              </div>
              <div className="home-speaker-card3">
                <div className="home-image-container3">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                    className="home-image11"
                  />
                </div>
                <span className="home-first-name3">
                  Studies have shown that Nutella is bad for you
                </span>
              </div>
              <div className="home-speaker-card4">
                <div className="home-image-container4">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                    className="home-image12"
                  />
                </div>
                <span className="home-first-name4">
                  Coca-Cola is better than Fanta.
                </span>
              </div>
              <div className="home-speaker-card5">
                <div className="home-image-container5">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1589476993333-f55b84301219?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2Nzg0MzczMDY&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="home-image13"
                  />
                </div>
                <span className="home-first-name5">
                  Starbucks secret is a smile when you get your latte
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <span className="home-text22">about us</span>
              <h2 className="home-text23">
                At Mirror, we offer a wide range of services to help you on your
                journey of self-improvement.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text24">Individual counseling</span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text25">Group therapy</span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text26">Support groups</span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text27">Workshops and classes</span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text28">
                    Meditation and mindfulness practices
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container6">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className="home-image14"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text29">Our process</span>
            <h2 className="home-text30 Heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step">
              <span className="home-text34">01</span>
              <div className="home-container07">
                <span className="home-text35">WE LISTEN</span>
                <span className="home-text36">
                  The first step in our process is to listen to you. We
                  understand that every person&apos;s journey is unique, and we
                  want to hear about your experiences, challenges, and goals.
                  Our licensed professionals provide a safe and supportive space
                  for you to share your thoughts and feelings without judgment.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text37">02</span>
              <div className="home-container08">
                <span className="home-text38">WE UNDERSTAND</span>
                <span className="home-text39">
                  The first step in our process is to listen to you. We
                  understand that every person&apos;s journey is unique, and we
                  want to hear about your experiences, challenges, and goals.
                  Our licensed professionals provide a safe and supportive space
                  for you to share your thoughts and feelings without judgment.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text40">03</span>
              <div className="home-container09">
                <span className="home-text41">WE HELP</span>
                <span className="home-text42">
                  The final step in our process is to help you achieve your
                  goals. Whether you&apos;re seeking individual counseling,
                  group therapy, or support groups, we offer a range of services
                  to help you on your journey of self-improvement. Our goal is
                  to help you develop the skills and strategies you need to live
                  a happier, healthier life.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text43">from blog</span>
            <h2 className="home-text44 Heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="home-text46">
              <span>
                Here we show you people who are going through and have gone
                through are process. This is what their lives have become
              </span>
              <br></br>
            </span>
            <button className="home-primary2 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="home-blog-cards-container">
              <BlogCard rootClassName="blog-card-root-class-name"></BlogCard>
              <div className="home-blog-card">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxibGFjayUyMGdpcmx8ZW58MHx8fHwxNjc4NDM3NDE3&amp;ixlib=rb-4.0.3&amp;w=600"
                  className="home-image15"
                />
                <span className="home-text49">
                  This is Anthea she is now a happy girl
                </span>
                <span className="home-text50">Learn more</span>
              </div>
              <div className="home-blog-card1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGhhcHB5JTIwbWFsZSUyMGJsYWNrJTIwdGVhY2hlcnxlbnwwfHx8fDE2Nzg0Mzc1NTU&amp;ixlib=rb-4.0.3&amp;w=600"
                  className="home-image16"
                />
                <span className="home-text51">
                  This is Kayode. He gives his students 100 now
                </span>
                <span className="home-text52">Learn more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text53">what are you waiting?</span>
            <h2 className="home-text54 Heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="home-text56">BE A BETTER PERSON TODAY</span>
            <button className="home-primary3 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text57">Product</span>
                <span className="home-text58">About</span>
                <span className="home-text59">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="home-navigate-container">
                <span className="home-text61">Navigate</span>
                <span className="home-text62">Copyrights</span>
                <span className="home-text63">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="home-contact-container">
                <span className="home-text65">Contact Us</span>
                <span className="home-text66">
                  <span>
                    Loyola jesuit college,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>SS2D &amp; SS2C,</span>
                  <br></br>
                  <span>Abuja</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <span className="home-text73">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width8 max-content-container">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-cdkv-200h.png"
            className="home-pasted-image"
          />
          <span className="home-text74">
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text76">Mirror</span>
            <span>| Designed byAnthony Njoku and Chukwuka Diwe</span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
