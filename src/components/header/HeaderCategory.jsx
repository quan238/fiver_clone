import React from 'react'

const HeaderCategory = ({ categories }) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li className={category.title.toLowerCase().replace(' & ', '-')}>
          {category.title}
          <div id={'ele' + (index + 1).toString()}>
            <div>
              {category.subcategories.map(subcategory => (
                <ul>
                  {subcategory.title && <h5>{subcategory.title}</h5>}
                  {subcategory.items.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HeaderCategory
