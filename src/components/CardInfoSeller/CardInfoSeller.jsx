import React from 'react'
import './CardInfoSeller.scss'
import { faker } from '@faker-js/faker'
import moment from 'moment'

export default function CardInfoSeller({ seller }) {
  return (
    <div className="seller-card seller_card-package">
      <div style={{ position: 'absolute', right: 0, height: 20, left: 0 }}>
        <div
          className="user-online-indicator is-online "
          data-user-id={99519711}
        >
          <i className="dot">·</i>Online
        </div>
      </div>
      <div className="collect-package seller-collect">
        <div className="W46fKfn k-kBZXW">
          <span className="_5-fo9i5">
            <button
              className="icn-heart"
              delay={120}
              content="[object Object]"
              position="top"
              boxclassname="_8UHHk5Q"
              boxcontentclassname="Yn90o2E"
              containerclassname="collect-package-tooltip"
            >
              <span
                className="XQskgrQ heart-icon"
                aria-hidden="true"
                style={{ width: 16, height: 16 }}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z" />
                </svg>
              </span>
            </button>
          </span>
        </div>
      </div>
      <div className="user-profile-info">
        <div className="flex-center flex items-center">
          <div className="user-profile-image">
            <label
              className="profile-pict"
              htmlFor="profile_image_3893407569949"
              style={{ width: 150, height: 150, fontSize: '3em' }}
            >
              <img
                src={seller?.avatar}
                className="profile-pict-img"
                alt="stylishwebs"
              />
              <a
                href="/levels"
                rel="nofollow"
                className="user-badge-round lg locale-en-us level-two-seller"
              />
            </label>
          </div>
        </div>
        <div className="user-profile-label">
          <div className="username-line">
            <a
              href="/stylishwebs"
              className="seller-link"
              rel="nofollow,noindex"
            >
              {seller?.name}
            </a>
          </div>
          <div className="oneliner-wrapper">
            <div className="liner-and-pen">
              <span className="oneliner">{seller?.role}</span>
            </div>
            <div className="ratings-wrapper">
              <span
                className="rating-stars"
                data-user-rating={5}
                data-user-ratings-count={900}
              />
              <div className="rating-text">
                <div className="orca-rating color-yellow tbody-6">
                  <div className="stars">
                    <span
                      className="XQskgrQ orca-star"
                      aria-hidden="true"
                      style={{ width: 15, height: 15 }}
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        />
                      </svg>
                    </span>
                    <span
                      className="XQskgrQ orca-star"
                      aria-hidden="true"
                      style={{ width: 15, height: 15 }}
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        />
                      </svg>
                    </span>
                    <span
                      className="XQskgrQ orca-star"
                      aria-hidden="true"
                      style={{ width: 15, height: 15 }}
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        />
                      </svg>
                    </span>
                    <span
                      className="XQskgrQ orca-star"
                      aria-hidden="true"
                      style={{ width: 15, height: 15 }}
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        />
                      </svg>
                    </span>
                    <span
                      className="XQskgrQ orca-star"
                      aria-hidden="true"
                      style={{ width: 15, height: 15 }}
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <b className="rating-score rating-num">5</b>
                  <span className="ratings-count rating-count">
                    (900 reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-wrapper ">
        <button className="flex items-center w-full bg-green-500 text-white py-2 px-4 pb-2 border-0 rounded flex mx-auto h-10 justify-between pl-40 font-large font-bold transition duration-300 ease-in-out">
          Contact Me
        </button>
        <div id="react-first-message-popup" />
      </div>
      <div className="user-stats-desc">
        <ul className="user-stats with-border-top ">
          <li className="flex justify-between location pt-5">
            <span>
              <span
                className="XQskgrQ user-stats-icon pr-2"
                aria-hidden="true"
                style={{ width: 13, height: 13, fill: 'rgb(98, 100, 106)' }}
              >
                <svg
                  width={12}
                  height={16}
                  viewBox="0 0 12 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={12} height={16} />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              From
            </span>
            <b>{faker.address.city()}</b>
          </li>
          <li className="flex justify-between member-since">
            <span>
              <span
                className="XQskgrQ user-stats-icon pr-2"
                aria-hidden="true"
                style={{ width: 13, height: 13, fill: 'rgb(98, 100, 106)' }}
              >
                <svg
                  width={14}
                  height={16}
                  viewBox="0 0 14 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z" />
                </svg>
              </span>
              Member since
            </span>
            <b>{moment(faker.date.birthdate()).format('DD/MM/YYYY')}</b>
          </li>
          <li className="flex justify-between response-time">
            <span>
              <span
                className="XQskgrQ user-stats-icon pr-2"
                aria-hidden="true"
                style={{ width: 13, height: 13, fill: 'rgb(98, 100, 106)' }}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                  <path d="M9 4H7v5h5V7H9V4z" />
                </svg>
              </span>
              Avg. Response Time
            </span>
            <b>1 hour</b>
          </li>
          <li className="flex justify-between recent-delivery">
            <span>
              <span
                className="XQskgrQ user-stats-icon pr-2"
                aria-hidden="true"
                style={{ width: 13, height: 13, fill: 'rgb(98, 100, 106)' }}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M3.60004 9.60012V14.5001C3.60004 15.2001 4.40004 15.5001 4.90004 15.0001L7.20004 12.3001L11.9 15.8001C12.3 16.1001 12.9 15.9001 13 15.4001L16 0.900122C16.1 0.300122 15.6 -0.0998784 15 0.100122L0.500041 5.90012C4.0561e-05 6.10012 -0.0999594 6.80012 0.300041 7.20012L1.90004 8.40012L6.50004 6.20012C6.90004 6.00012 7.20004 6.50012 6.90004 6.70012L3.60004 9.60012Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Last Delivery
            </span>
            <strong>{Math.floor(Math.random() * 10)}&nbsp;hours</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}
