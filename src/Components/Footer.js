import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopBtn from './ScrollToTopBtn'

function Footer() {
  const [version, setVersion] = useState('')
  useEffect(() => {
    fetch('/app.json')
      .then((response) => response.json())
      .then((data) => setVersion(data.version))
      .catch((error) => {
        console.log('Footer useEffect', error)
        alert('An error occurred please try again later.')
      })
  }, [])

  return (
    <footer className="flex justify-content-center align-items-center">
      <p>
        <span className="mr-2">Copyright ©</span>
        <Link
          to={{ pathname: '/' }}
          target="_blank"
          className="mr-2"
          aria-label="Rohit Swain"
        >
        </Link>
        <span>{version}</span>
      </p>
      <ScrollToTopBtn />
    </footer>
  )
}

export default Footer
