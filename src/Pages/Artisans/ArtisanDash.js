import { LocationCity, MessageOutlined, Person, PhotoAlbumOutlined } from '@mui/icons-material'
import { Box, Rating } from '@mui/material'
import React from 'react'

function ArtisanDash() {
    return (
        <main>
            <header>
                <div className='headerCover'>
                    <section className='dashboardHeader'>
                        <div className='dashHeaderCont'>
                            <PhotoAlbumOutlined style={{ fontSize: '35px', color: "#BFEA7C" }} />
                            <MessageOutlined style={{ fontSize: '35px', color: "#BFEA7C" }} />
                        </div>
                    </section>
                    <section className='dashboardBody'>
                        <section className='profileDet'>
                            <div className='topDet'>
                                <img src={require('../../Assets/Img/craftsmen-3094035_1280.jpg')} />
                                <h3>Daniel Khoza</h3>
                                <p style={{ color: 'gray', fontWeight: 'normal', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '1rem' }}>Active 11 minutes ago</p>
                            </div>
                            <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginTop: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                                <Person style={{ color: '#416D19' }} />

                                Member since Dec 05, 2022</p>
                            <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                                <LocationCity style={{ color: '#416D19' }} />

                                Pretoria, South Africa</p>
                            <div className='profileButtons'>
                                <button>Upload Images</button>
                                <button>Edit Profile</button>
                            </div>
                        </section>
                        <section className='postDet'>
                            <div className="clientsCard">
                                <div className="topRatedCard-info">
                                    <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className='cardImg' />
                                    <div className="artisanDet">
                                        <h3>Promise Magoga</h3>
                                        <p style={{ color: 'gray', fontWeight: 'normal', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '1rem' }}>Pretoria, South Africa</p>
                                    </div>
                                </div>
                                <div className='postCardDes'>
                                    <h3>Description</h3>
                                    <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
                                </div>
                                <button className="sendPropBtn">
                                    Send Proposal
                                </button>
                            </div>
                            <div className="clientsCard">
                                <div className="topRatedCard-info">
                                    <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className='cardImg' />
                                    <div className="artisanDet">
                                        <h3>Promise Magoga</h3>
                                        <p style={{ color: 'gray', fontWeight: 'normal', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '1rem' }}>Pretoria, South Africa</p>
                                    </div>
                                </div>
                                <div className='postCardDes'>
                                    <h3>Description</h3>
                                    <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
                                </div>
                                <button className="sendPropBtn">
                                    Send Proposal
                                </button>
                            </div>
                            <div className="clientsCard">
                                <div className="topRatedCard-info">
                                    <img src={require("../../Assets/Img/workers-2036185_1280.jpg")} alt="My Image" className='cardImg' />
                                    <div className="artisanDet">
                                        <h3>Promise Magoga</h3>
                                        <p style={{ color: 'gray', fontWeight: 'normal', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '1rem' }}>Pretoria, South Africa</p>
                                    </div>
                                </div>
                                <div className='postCardDes'>
                                    <h3>Description</h3>
                                    <p>I want a 3 bedroom house, spacious room that can accomodate both kitchen an sitting room, a single bathroom, two verandas at the front and back door.</p>
                                </div>
                                <button className="sendPropBtn">
                                    Send Proposal
                                </button>
                            </div>
                        </section>
                    </section>
                </div>
            </header>
        </main>
    )
}

export default ArtisanDash