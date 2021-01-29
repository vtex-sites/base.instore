import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VTEX inStore</title>
      </Helmet>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Hello World</h1>
        <div>This is going to be an inStore tenant! \o/</div>
      </main>
    </Fragment>
  )
}

export default IndexPage
