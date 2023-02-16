import React from 'react'
import './CardSellerProfile.scss'
export default function CardSellerProfile({ seller }) {
  return (
    <div className="seller-profile">
      <div className="description">
        <h3>Description</h3>
        <p>
          I am a professional web developer with 5 years of experience. I have a
          lot of experience in web development
        </p>
      </div>
      <div className="languages">
        <h3>Languages</h3>
        <ul>
          <li>
            English&nbsp;&nbsp;- <span>Fluent</span>
          </li>
          <li>
            Hindi&nbsp;<strong>(हिंदी)</strong> - <span>Native/Bilingual</span>
          </li>
        </ul>
      </div>
      <div className="linked-accounts">
        <h3>Linked Accounts</h3>
        <ul>
          <li className="social-account items-center">
            <span
              className="XQskgrQ social-icon"
              aria-hidden="true"
              style={{ width: 14, height: 14, fill: 'rgb(98, 100, 106)' }}
            >
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.5065 9.8175H13.0525V14.727H19.5445C18.5065 18 15.943 19.0905 13 19.0905C11.8595 19.0919 10.7356 18.8182 9.72343 18.2927C8.7113 17.7671 7.84088 17.0051 7.18602 16.0714C6.53116 15.1377 6.11118 14.0598 5.96173 12.9292C5.81227 11.7986 5.93774 10.6486 6.32749 9.57681C6.71725 8.50502 7.35978 7.54305 8.20058 6.77254C9.04138 6.00202 10.0556 5.44569 11.1573 5.15074C12.259 4.85578 13.4155 4.83092 14.5288 5.07826C15.6421 5.32559 16.6794 5.83782 17.5525 6.5715L21.1195 3.174C19.683 1.85075 17.9453 0.89812 16.0571 0.398801C14.169 -0.100519 12.1875 -0.131434 10.2847 0.308739C8.38187 0.748912 6.61526 1.64687 5.13821 2.92465C3.66115 4.20244 2.5183 5.82144 1.80887 7.64109C1.09943 9.46074 0.844859 11.426 1.06725 13.3664C1.28964 15.3068 1.98226 17.1635 3.085 18.7755C4.18774 20.3874 5.66726 21.7059 7.39511 22.6163C9.12297 23.5268 11.0469 24.0018 13 24C19.6165 24 25.6 19.6365 24.5065 9.8175Z" />
              </svg>
            </span>
            <span className="text">oogle</span>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {seller?.skill.map(item => (
            <li className>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="education-list list">
        <h3>Education</h3>
        <ul>
          <li>
            <p>B.Sc. - computer science</p>
            <p className="co-grey-700">
              Government national college ,sirsa, India, Graduated 2019
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
