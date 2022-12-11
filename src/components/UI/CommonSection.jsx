import React from 'react'
import { Container } from 'reactstrap'
import '../../styles/common-section.css'

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className='text-center'>
        <h1>{title}</h1>
        {/* 21_28 - v02 */}
      </Container>
    </section>
  )
}

export default CommonSection