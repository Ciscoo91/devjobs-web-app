import { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import Button from '../components/button/Button'
import Jobs from "../data.json"
import styles from './JobDetail.module.css'
import Layout from '../Layout/Layout'
import useJobPostingIcon from '../hooks/useJobPostingIcon'
import { JobPosting } from '../types'
import { ThemeContext } from '../contexts/themeContext'

type RouteParams = {
  jobId : string
}

type JobPostingState = {
  jobState? : JobPosting | null
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

  // const icon = useJobPostingIcon(jobItem)

  if(!jobItem){
    return <div>Loading....</div>
  }

  return (
    <Layout>
      <div className={styles.detailsPage}>
        <div className={styles.container}>
          <div className={styles.headCard}>
            <div className={styles.companyLogo} style={{backgroundColor: jobItem.logoBackground}}>
              <img src={jobItem.logo} alt="logo of the company"/>
            </div>
            <div className={styles.companyInfo}>
              <div>
                <h3 className={styles.companyName}>{jobItem.company}</h3>
                <span className={styles.companyWebsite}>{jobItem.website}</span>
              </div>
              <Button><a href={jobItem.website}>Company Site</a></Button>
            </div>
          </div>
          <main className={styles.mainContent}>
            <div className={styles.mainCard}>
              <div>
                <p className={styles.description}>{`${jobItem.postedAt} . ${jobItem.contract}`}</p>
                <h3 className={styles.position}>{jobItem.position}</h3>
                <span className={styles.location}>{jobItem.location}</span>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className={styles.description}>{jobItem.description}</p>
            <section className={styles.requirements}>
              <h4 className={styles.requirementsTitle}>Requirements</h4>
              <p className={styles.requirementsContent}>{jobItem.requirements.content}</p>
              <ul className={styles.itemsList}>
                {jobItem.requirements.items.map((item, index) => <li className={styles.itemsListItem} key={index}>{item}</li>)}
              </ul>
            </section>
            <section className={styles.role}>
              <h4 className={styles.roleTitle}>What You Will Do</h4>
              <p className={styles.roleContent}>{jobItem.role.content}</p>
              <ol className={styles.itemsList} >
                {jobItem.role.items.map((item, index) => <li className={styles.itemsListItem} key={index}>{item}</li>)}
              </ol>
            </section>
          </main>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <h3 className={styles.footerPosition}>{jobItem.position}</h3>
            <span className={styles.footerCompany}>{jobItem.company}</span>
          </div>
          <Button>Apply Now</Button>
        </div>
      </footer>
    </Layout>    
  )
}
