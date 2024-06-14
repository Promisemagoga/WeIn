import { Edit } from '@mui/icons-material'
import React from 'react'
import HomeNav from './HomeNavBar'

function ArtisanProfile() {
  return (
    <div>
      <HomeNav />
      <div className='profileContainer'>
        <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} />
        <p>Daniel Khoza</p>
        <p>Pretoria, South Africa</p>
        <Edit />
        <button>Add more pictures</button>
        <div className='galleryContainer'>
          <h1>My Gallery</h1>
          <div className='galleryImages'>
            <img src={require("../../Assets/Img/housebuilding-3370969_1280.jpg")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/housebuilding-3370969_1280.jpg")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/house-7497001_1280.webp")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/house-7497001_1280.webp")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtisanProfile