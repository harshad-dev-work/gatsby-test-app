import React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Greeting from '../components/Greeting'


const about = () => {
  console
  return (
    <div>
      this is the abour page
      <Greeting message="from about page" />
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />

    </div>

  )
}

export default about
