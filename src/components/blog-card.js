import React from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-blog-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <span className="blog-card-text">
        This is Anthony, he is now a happy black kid
      </span>
      <span className="blog-card-text1">{props.text}</span>
    </div>
  )
}

BlogCard.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxibGFjayUyMGJveXxlbnwwfHx8fDE2Nzg0MzY2NzQ&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  text: 'Learn more',
}

BlogCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BlogCard
