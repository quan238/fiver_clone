import React from 'react'
import GridCard from '../../components/GridCard'

export default function ListGigsContainer() {
  return (
    <div className="w-100">
      <header>
        <h2 class="text-display-5">stylishwebs's Gigs</h2>
      </header>
      <div className="w-100">
        <div class="grid grid-cols-4 gap-4 w-100">
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
        </div>
      </div>
    </div>
  )
}
