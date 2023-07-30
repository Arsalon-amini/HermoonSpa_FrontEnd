import React from 'react'

type AboutUsPageProps = {
    children?: React.ReactNode
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ children }) => {
  return (
  <>
  
  {children}
  </>
  )
}

export default AboutUsPage;