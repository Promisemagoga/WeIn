import React from 'react'
import ClientNavBar from './ClientNavBar'
import { Hotel, PersonOutline } from '@mui/icons-material'
import { Box, Rating } from '@mui/material'

function ClientDashboard() {
  return (
    <main>
      <ClientNavBar />
      <div>
        <div className="topRatedCard">
          <div className="topRatedCard-info">
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
            <div className="type-price">
              <h3 className="type">Daniel Khoza</h3>
              <p>Plumber</p>
              <p className="price">Pretoria, South Africa</p>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating value={4} readOnly />
              </Box>
            </div>

          </div>
          <button className="viewDealBtn">
            Send Proposal
          </button>
        </div>
        <div className="topRatedCard">
          <div className="topRatedCard-info">
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
            <div className="type-price">
              <h3 className="type">Moses Khambule</h3>
              <p>Brick Layer</p>
              <p className="price">Johannesurg, South Africa</p>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating value={3} readOnly />
              </Box>
            </div>

          </div>
          <button className="viewDealBtn">
            Send Proposal
          </button>
        </div>
        <div className="topRatedCard">
          <div className="topRatedCard-info">
            <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
            <div className="type-price">
              <h3 className="type">Cyril Zuma</h3>
              <p>Painter</p>
              <p className="price">Western Cape, South Africa</p>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating value={2.5} readOnly />
              </Box>
            </div>

          </div>
          <button className="viewDealBtn">
            Send Proposal
          </button>
        </div>
      </div>

    </main>
  )
}

export default ClientDashboard