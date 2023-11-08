import React from 'react'
import Layout from '../../layout/layout'
import './Contact.css'
import {db} from '../../firebase/firebase'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'

const Contact=() => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactdata")

  const handleSubmit =() => {
    addDoc(userCollectionRef,{
    name: name, 
    email: email, 
    subject: subject,
    message: message
  }).then(() =>{
    if (!alert("Form Submitted Successfully!!"));
  }).catch((error) => {alert(error.message)})
}
    
  return (
    <Layout >
      <div className="outer-container">
      <h2>Contact Us</h2>
      <form className='contactform'>
        <label>Full name</label>
        <input type="text" placeholder="Enter your Full Name" name='user_name' required
        onChange={(event)=>{
          setName(event.target.value)
        }}/>
        <label>Email</label>
        <input type="email" placeholder="Enter your Email" name='user_email' required
        onChange={(event)=>{
          setEmail(event.target.value)
        }}/>
        <label>Subject</label>
        <input type="text" placeholder="Enter Subject" name='Subject' required
        onChange={(event)=>{
          setSubject(event.target.value)
        }}/>
        <label>Message</label>
        <textarea placeholder="Enter your Message" cols={30} rows={10}
        onChange={(event)=>{
          setMessage(event.target.value)
        }}></textarea>
        <button onClick={handleSubmit} type="submit" >Submit</button>
      </form>
      </div>
    </Layout>
  )
}

export default Contact