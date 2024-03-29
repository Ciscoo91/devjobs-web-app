import { useContext, useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import './Home.css'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Layout from '../../Layout/Layout'
import iconSearch from '../../assets/desktop/icon-search.svg'
import iconLocation from '../../assets/desktop/icon-location.svg'
import { JobPosting } from '../../types'
import Modal from "../../components/modal/Modal"
import {ReactComponent as IconSearch} from '../../assets/desktop/icon-search.svg'
import {ReactComponent as IconFilter} from '../../assets/mobile/icon-filter.svg'

const BASE_API_URL = "https://devjobs-app-api.onrender.com"

function Home(){
  
  const {theme} = useContext(ThemeContext)
  const [jobPosts, setJobPosts] = useState<JobPosting[]>([])
  const [filter, setFilter] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [fulltime, setFulltime] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleSearch = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      
      const dataToPost = {
        filter: filter,
        location: location,
        fulltime: fulltime ? "Full Time": null
      }   

      const response = await fetch(`${BASE_API_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToPost)
      });

      if (response.ok) {
        const data = await response.json();
        setJobPosts(data)
      } else {
        console.error("Failed to fetch data:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderModal = (event: React.MouseEvent) => {
    event.stopPropagation()
    setShowModal(true)
  }


  function handleLocationChange(event: ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  function handleFulltimeChange(event: ChangeEvent<HTMLInputElement>) {
    setFulltime(event.target.checked);
  }

  useEffect(()=>{
    const getJobPosts = async () => {
      const response = await fetch(`${BASE_API_URL}/`)
      const data = await response.json()
      setJobPosts(data)
    }

    getJobPosts()
  }, [])

  return (
    <Layout>
      <main className={`main-content app-${theme}`}>
        <form className={`form form-${theme}`} onSubmit={handleSearch}>
            <div className="form-control">
                <img src={iconSearch} alt="loupe logo" />
                <input placeholder="Filter by title, companies, expertise..." type="text" className='company-input' value={filter} name="filter" onChange={(e) => setFilter(e.target.value)}/>
                <>
                  <button className="filter-icon" onClick={(event) => renderModal(event)}>
                      <IconFilter className="filter__icon" 
                          style={theme == "light" ? {backgroundColor: "#FFF"} : {backgroundColor: "#19212e"}}
                      />
                  </button>
                  <button className={`mobile-search-button ${theme}`}>
                      <IconSearch className='search__icon' />
                  </button>
                </>
            </div>
            <div className="form-control">
                <img src={iconLocation} alt="" />
                <input placeholder="Filter by location..." name="location" value={location} type="text" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-control">
                <input id="fullTime" type="checkbox" name="fulltime" onChange={(e) => setFulltime(e.target.checked)}/>
                <label htmlFor="fullTime">Full Time Only</label>
                <Button>Search</Button>
                
            </div>
        </form>
        <div className="card-container">
          {jobPosts?.map((job: JobPosting) => <Card key={job.id}  jobPost={job}/>)}
          <Button>Load More</Button>
        </div>
      </main>
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} handleLocationChange={handleLocationChange} handleFulltimeChange={handleFulltimeChange} handleSearch={handleSearch}/>}
    </Layout>
  )
}

export default Home
