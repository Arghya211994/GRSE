import Address from '@/components/Address/Address'
import Carousel2 from '@/components/Carousel2/Carousel2'
import Content from '@/components/Content/Content'
import Events from '@/components/Events/Events'
import Faq from '@/components/Faq/Faq'
import Hero from '@/components/Hero/Hero'
import Layout from '@/components/Layout'
import Productprofile from '@/components/Product_profile/Productprofile'
import React from 'react'

const index = () => {
  return (
    <>
    <Layout>
      <Hero/>
      {/* <Content/> */}
      <Productprofile/>
      <Carousel2/>
      <Events/>
      <Address/>
    </Layout>
    </>
  )
}

export default index