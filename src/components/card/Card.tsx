import React, { useContext } from 'react'
import "./Card.css"
import { ThemeContext } from '../../contexts/themeContext'
import { JobPosting } from '../../types'
import { Link } from 'react-router-dom'

type CardProps = {
  jobPost: JobPosting
}

export default function Card({jobPost}: CardProps) {

  const {theme} = useContext(ThemeContext)  
  return (
    <div className={`card card-${theme}`}>
      <Link key={`jobs/${jobPost.id}`} to={jobPost.id.toString()}>
        <div className="logo" style={{backgroundColor: jobPost.logoBackground}}>
            <img src={jobPost.logo} alt="" />
        </div>
        <p className="description">{`${jobPost.postedAt} . ${jobPost.contract}`}</p>
        <h3 className="position">{jobPost.position}</h3>
        <p className="company">{jobPost.company}</p>
        <span className="location">{jobPost.location}</span>
        </Link>
    </div>
  )
}
