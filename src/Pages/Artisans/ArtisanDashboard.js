import React from 'react'
import HomeNav from './HomeNavBar'


function ArtisanDashboard() {
  return (
    <div>
      <HomeNav />
      <div className='gridCards'>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Promise Magoga</h3>
                <p className="price">Pretoria, South Africa</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Send Proposal
          </button>
        </div>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Tshego Marope</h3>
                <p className="price">Pretoria, South Africa</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Send Proposal
          </button>
        </div>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Gontse Makhubela</h3>
                <p className="price">Pretoria, South Africa</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Send Proposal
          </button>
        </div>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Tshepiso Mohale</h3>
                <p className="price">Pretoria, South Africa</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Send Proposal
          </button>
        </div>
     
      </div>
    </div>
  )
}

export default ArtisanDashboard