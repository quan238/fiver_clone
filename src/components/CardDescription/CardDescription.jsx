import React from 'react'
import './CardDescription.scss'

export default function CardDescription({ description }) {
  return (
    <div id="cartAbout">
      <header>
        <h2 className="section-title">About This Gig</h2>
      </header>
      <div className="description-wrapper">
        <span style={{ fontSize: 0 }} />
        <div className="description-content" data-impression-collected="true">
          {description}
        </div>
      </div>
    </div>
  )
}
