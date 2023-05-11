import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import { useState } from 'react'
import Head from 'next/head'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar />
      <div className="hero-section">
        <div className="hero-text">
          <h1>Future of <span className='color-purp'>Creditworthiness</span></h1>
          <p>An on-chain credit score platform made for you, with you in mind</p>
            <button className='hero-btn' onClick={() => setModalOpen(true)}>Join Waitlist</button>
        </div>
        <img className='hero-img' src="kredible-nft.png" alt="" />
      </div>
      <div className='elipse'></div>
      <div className="content">
        <div className="card-section">
        <Card icon={'./onchain.svg'} title={"On-Chain Credit Scoring"} text ={"To ensure the accuracy of credit scores, we have implemented the MALTS SYSTEM which incorporates appropriate parameters."}/>
        <Card icon ={'./loan.svg'} title={"Loan Aggregator"} text ={"Leading Protocol aggregators In - Line with Users Credit Score."}/>
        <Card icon = {'./Vector.svg'} title={"Credit Climber"} text ={"Understand the ins and outs of your credit score with personalized analysis, and receive customized tips for improving your score if it needs a boost."}/>
        </div>
        <div className='btn-container'>
        <img className='star-img' src="stars-left.svg" alt="" />
        <button className='sign-up-btn' onClick={() => setModalOpen(true)}>Sign up for waitlist</button>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
        <img src="stars-right.svg" alt="" />
        </div>
        <div className='elipse'></div>
      </div>
    </>
  )
}
