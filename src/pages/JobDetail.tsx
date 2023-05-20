import { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ThemeContext } from '../contexts/themeContext'
import Button from '../components/button/Button'
import Jobs from "../data.json"
import Layout from '../Layout/Layout'
import { JobPosting } from '../types'
import './JobDetail.css'

type RouteParams = {
  jobId : string
}


export default function JobDetail() {

  const {theme} = useContext(ThemeContext)

  const [jobItem, setJobItem] = useState<JobPosting | null>(null)
  const {jobId} = useParams<RouteParams>();
  const id = jobId ? parseInt(jobId) : ""

  useEffect(()=>{
    const filteredJob: JobPosting = Jobs.filter((job) => job.id == id || null)[0]
    setJobItem(filteredJob);
  }, [id])

  if(!jobItem){
    return <div>Loading....</div>
  }

  return (
    <Layout>
      <div className="details-page">
        <div className="details-page__container">
          <div className={`head-card head-card--${theme}`}>
            <div className="company-logo" style={{backgroundColor: jobItem.logoBackground}}>
              <img src={jobItem.logo} alt="logo of the company"/>
            </div>
            <div className="company-info">
              <div>
                <h3 className="company-info__name">{jobItem.company}</h3>
                <span className="compani-info__website">{jobItem.website}</span>
              </div>
              <Button><a href={jobItem.website}>Company Site</a></Button>
            </div>
          </div>
          <main className={`main-content main-content--${theme}`}>
            <div className="main-card">
              <div>
                <p className="main-card__description">{`${jobItem.postedAt} . ${jobItem.contract}`}</p>
                <h3 className="main-card__position">{jobItem.position}</h3>
                <span className="main-card__location">{jobItem.location}</span>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className="description">{jobItem.description}</p>
            <section className="requirements">
              <h4 className="requirements__title">Requirements</h4>
              <p className="requirements__content">{jobItem.requirements.content}</p>
              <ul className="items-list">
                {jobItem.requirements.items.map((item, index) => <li className="items-list__item" key={index}>{item}</li>)}
              </ul>
            </section>
            <section className="role">
              <h4 className="role__title">What You Will Do</h4>
              <p className="role__content">{jobItem.role.content}</p>
              <ol className="items-list" >
                {jobItem.role.items.map((item, index) => <li className="items-list__item" key={index}>{item}</li>)}
              </ol>
            </section>
          </main>
        </div>
      </div>
      <footer className={`footer footer-${theme}`}>
        <div className="footer__container">
          <div>
            <h3 className="footer__position">{jobItem.position}</h3>
            <span className="footer__company">{jobItem.company}</span>
          </div>
          <button className='button'>Apply Now</button>
        </div>
      </footer>
    </Layout>    
  )
}
