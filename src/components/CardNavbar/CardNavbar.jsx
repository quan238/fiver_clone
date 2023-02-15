import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import './CardNavbar.scss'
export default function CardNavbar() {
  return (
    <nav className=" categories-breadcrumbs mt-5 mb-0">
      <ul className="flex items-center">
        <li className="flex items-center">
          <span className="category-breadcrumbs ">
            <a href="/categories/programming-tech?source=gig_category_link">
              Programming &amp; Tech
            </a>
          </span>
          <RiArrowDropRightLine size={30} />
        </li>
        <li className="flex items-center">
          <span className="category-breadcrumbs ">
            <a href="/categories/programming-tech?source=gig_category_link">
              Website Development
            </a>
          </span>
          <RiArrowDropRightLine size={30} />
        </li>
        <li className="flex items-center">
          <span className="category-breadcrumbs ">
            <a href="/categories/programming-tech?source=gig_category_link">
              WordPress
            </a>
          </span>
          <RiArrowDropRightLine size={30} />
        </li>
      </ul>
    </nav>
  )
}
