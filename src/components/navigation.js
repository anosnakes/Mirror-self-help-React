import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header data-role="Header" className="navigation-header">
      <div className="navigation-max-width">
        <div className="navigation-container">
          <img alt={props.pastedImage_alt} src={props.pastedImage_src} />
        </div>
        <div className="navigation-nav">
          <NavigationLinks rootClassName="navigation-links-root-class-name17"></NavigationLinks>
          <button className="button-secondary button button-md">
            {props.button}
          </button>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation-nav1">
            <div className="navigation-container1">
              <img alt={props.image_alt1} src={props.image_src1} />
              <div
                data-role="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="navigation-links-root-class-name18"></NavigationLinks>
            <button className="button-secondary button button-md">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/536f0068-589f-406c-b828-d790bc0e2131/638e963c-5e22-4353-ac72-846b1f798853?org_if_sml=125840',
  button: 'Get in touch',
  image_alt1: 'image',
  image_src1: '/playground_assets/logo1-1500h.png',
  button2: 'Get in touch',
  pastedImage_alt: 'pastedImage',
}

Navigation.propTypes = {
  pastedImage_src: PropTypes.string,
  button: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  button2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default Navigation
