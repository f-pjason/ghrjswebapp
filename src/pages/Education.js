  import React from 'react'
  import EducationItem from '../components/EducationItem'
  import Meet from "../assets/meet.png"
  import Stud1 from "../assets/stud1.jpg"
  import Pinasarap from "../assets/pinasarap.jpg"
  import Sinemotoh from "../assets/sinemotoh.jpg"
  import { EducationList } from "../helpers/EducationList"

  import "../styles/Education.css"

  function Education() {
    return (
      <div className="education">
        <h1> Education </h1>
        <div className="educationList"></div>
        {EducationList.map((education) => {
          return <EducationItem name={education.name} image={education.image} description={education.description} />
        })}
      </div>
    )
  }

  export default Education