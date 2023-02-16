import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import './CardNavbar.scss'
export default function CardNavbar({ navbar }) {
  return (
    <nav className=" categories-breadcrumbs mt-5 mb-0">
      <ul className="flex items-center">
        {navbar.map((item, index) => (
          <li className="flex items-center">
            <span className="category-breadcrumbs ">
              <a href="#">{item}</a>
            </span>
            {index === navbar.length - 1 ? (
              <></>
            ) : (
              <RiArrowDropRightLine size={30} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
