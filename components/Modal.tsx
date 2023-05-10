import * as React from 'react';
import { useState } from 'react';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from 'firebase/database'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default function Modal({ setModalOpen }: any) {

  const [walletAddress, setWalletAddress] = useState('');
  const [email, setEmail] = useState('')

  const firebaseConfig = {
    apiKey: "AIzaSyBxhGWiLCHRF0TohyY6LWBcB897D_lHnkU",
    authDomain: "kredible-waitlist.firebaseapp.com",
    databaseURL: "https://kredible-waitlist-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kredible-waitlist",
    storageBucket: "kredible-waitlist.appspot.com",
    messagingSenderId: "18548920073",
    appId: "1:18548920073:web:239a8a76a5a332156dcdd8",
    measurementId: "G-3VDG2JWLSE"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  
  // Get a reference to the waitlist node in the database
  const waitlistRef =  ref(database, "waitlist");

  function handleSubmit(event: any) {
    event.preventDefault();

    // Add the user to the waitlist
    push(waitlistRef, {email, walletAddress})

    // Reset the form
    setWalletAddress('');
    setEmail('');
  }


  return (
    <div className='modal-background'>
      <div className="modal-container">
        <div className="close-button">
          <button className='close-btn' onClick={() => {
            setModalOpen(false)
          }}>X</button>
        </div>
        <div className="modal-content">
          <div className="modal-title">
            <h1>Sign up to get early access</h1>
          </div>
          <form className='signup-form' onSubmit={handleSubmit}>
            <label className='label-email'>
              Email Address
              <input type="email" name="Email Address" className='form-input' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className='label-email'>
              Wallet Address (optional)
              <input type="text" name="Wallet Address" className='form-input' value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)}/>
            </label>
            <button className='signup-btn' type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}