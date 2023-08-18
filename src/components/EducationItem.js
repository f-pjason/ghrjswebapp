import React from 'react'

function EducationItem({image, name, description}) {
  return (
    <div className="educationItem">
        <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
        <h1> {name} </h1>
        <p> {description} </p>
    </div>
  )
}

export default EducationItem