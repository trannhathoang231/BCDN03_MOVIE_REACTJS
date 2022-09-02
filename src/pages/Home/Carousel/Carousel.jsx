import React from 'react'
import './Carousel.css'
import CarouselBanner from './Carousel.js';
import './Carousel.js'
function Carousel() {
  return (
    <div className="carousel-container">
      <a className="slick-arrow slick-prev">
        <i className="fas fa-angle-left" />
      </a>
      <div className="slick-list">
        <div className="slick-track">
          <div id="lastClone" className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img6.jpg" alt />
              </a>
            </div>
          </div>
          <div className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img2.jpeg" alt />
              </a>
            </div>
          </div>
          <div className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img3.jpg" alt />
              </a>
            </div>
          </div>
          <div className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img4.jpg" alt />
              </a>
            </div>
          </div>
          <div className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img5.jpg" alt />
              </a>
            </div>
          </div>
          <div className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img6.jpg" alt />
              </a>
            </div>
          </div>
          <div id="firstClone" className="slick-slide slick-cloned" data-index={1} tabIndex={-1} aria-hidden="true" style={{ width: 584 }}>
            <div>
              <a href aria-label tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                <img className="image" src="img/img2.jpeg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <a className="slick-arrow slick-next">
        <i className="fas fa-angle-right" />
      </a>
      <ul className="slick-dots">
        <li className="slick-active">
          <button>1</button>
        </li>
        <li className>
          <button>2</button>
        </li>
        <li className>
          <button>3</button>
        </li>
        <li className>
          <button>4</button>
        </li>
        <li className>
          <button>5</button>
        </li>
      </ul>
    </div>

  )
}

export default Carousel