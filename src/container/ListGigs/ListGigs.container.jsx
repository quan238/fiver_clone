import React from 'react'
import gigAPI from '../../api/gig'
import GridCard from '../../components/GridCard'

export default function ListGigsContainer({ seller }) {
  React.useEffect(() => {
    async function getGigInformation() {
      const data = await gigAPI.getGigBySellerId()
      if (data && data.content[0]) {
        console.log(data)
      }
    }

    getGigInformation()
    return
  }, [])

  return (
    <div className="w-100">
      <header>
        <h2 class="text-display-5">{seller?.name}'s Gigs</h2>
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
