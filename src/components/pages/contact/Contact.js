import React from 'react'
import Layout from '../../layout/layout'
import './Contact.css'
const Contact=() => {
  return (
    <Layout >
      <div className="outer-container">
      <h2>Contact Us</h2>
      <form className='contactform'>
        <label>Full name</label>
        <input type="text" placeholder="Enter your Full Name"/>
        <label>Email</label>
        <input type="email" placeholder="Enter your Email" name='user_email' required/>
        <label>Subject</label>
        <input type="text" placeholder="Enter Subject" name='Subject' required/>
        <label>Message</label>
        <textarea placeholder="Enter your Message" cols={30} rows={10}></textarea>
        <button type="submit" className='--btn --btn-primary'>Submit</button>
      </form>
      </div>
    </Layout>
  )
}

export default Contact