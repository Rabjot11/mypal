import React from 'react'
import { Newsletter } from '../Newsletter/NewsLetter'
import Hero from '../hero/Hero'
import Adopt from './adopt/Adopt'
import Layout from '../layout/layout'


function Home() {
  return (
    <Layout>
        <Hero/>
        <Newsletter />
            
    </Layout>
  )
}

export default Home
