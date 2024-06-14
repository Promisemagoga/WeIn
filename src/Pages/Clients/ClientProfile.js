import React from 'react'
import ClientNavBar from './ClientNavBar'
import { Edit } from '@mui/icons-material'

function ClientProfile() {
  return (
    <div>
      <ClientNavBar/>
      <div className='profileContainer'>
        <img src={require("../../Assets/Img/workers-2036185_1280.jpg")}/>
        <p>Promise Magoga</p>
        <p>Pretoria, South Africa</p>
        <Edit/>
        <button>Make A Post</button>

        <div className='gridCards'>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Promise Magoga</h3>
                
                <p>17 days ago</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Delete Post
          </button>
        </div>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Promise Magoga</h3>
                
                <p>2 hours ago</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Delete Post
          </button>
        </div>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Promise Magoga</h3>
                <p>37 minutes ago</p>
              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Delete Post
          </button>
        </div>
        <div className="postCard">
          <div>
            <div className="postCard-info">
              <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className="main-image" />
              <div className="type-price">
                <h3 className="type">Promise Magoga</h3>
             
                <p>1 day ago</p>

              </div>
            </div>
            <div className='postCardDes'>
              <h3>Description</h3>
              <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
            </div>
          </div>
          <button className="sendProposalBtn">
            Delete Post
          </button>
        </div>
     
      </div>
      </div>
    </div>
  )
}

export default ClientProfile