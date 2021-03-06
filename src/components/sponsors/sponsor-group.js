import React from 'react'
import {chunk} from 'lodash'

import Sponsor from './sponsor'

export default SponsorGroup

function SponsorGroup({sponsors, title}) {
  if (!sponsors.length) {
    return <noscript />
  }
  const sponsorsPerRow = sponsors.length === 4 ? 2 : 1
  const rows = Math.ceil(sponsors.length / sponsorsPerRow)
  const chunkedSponsors = chunk(sponsors, rows)
  return (
    <div>
      <hr />
      <h3 className="sponsors-section__subheading">{title}</h3>
      {
        chunkedSponsors.map((rowSponsors, index) => {
          return (
            <div className="sponsor-group +space-children" key={index}>
              {rowSponsors.map((s, i) => <Sponsor key={i} {...s} />)}
            </div>
          )
        })
      }
    </div>
  )
}
