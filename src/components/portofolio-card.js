import React from 'react'

import PropTypes from 'prop-types'

import './portofolio-card.css'

const PortofolioCard = (props) => {
  return (
    <div className={`portofolio-card-speaker-card ${props.rootClassName} `}>
      <div className="portofolio-card-image-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="portofolio-card-image"
        />
      </div>
      <span className="portofolio-card-first-name">{props.project_title}</span>
    </div>
  )
}

PortofolioCard.defaultProps = {
  rootClassName: '',
  project_title: 'support groups-a new and fun way to handle your problems',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGdyb3VwJTIwb2YlMjB8ZW58MHx8fHwxNjc4NDM2MTY5&ixlib=rb-4.0.3&h=400',
}

PortofolioCard.propTypes = {
  rootClassName: PropTypes.string,
  project_title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default PortofolioCard
