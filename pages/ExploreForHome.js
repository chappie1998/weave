import React from 'react'
import Explore from './Explore'
import Tablist from './Tablist'
import Button from './Button'

const ExploreForHome = () => {
  return (
    <div className='container mx-auto max-w-screen-xl px-5'><Tablist/>
    <Button className="px-9"/>
    <Explore/></div>
  )
}

export default ExploreForHome