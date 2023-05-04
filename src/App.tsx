import {Link} from 'react-router-dom'
import './App.css'
import Button from './components/button/Button'
import Card from './components/card/Card'
import Jobs from "./data.json"
import Layout from './Layout/Layout'
import ModalPortal from './components/modal/ModalPortal'
import iconSearch from './assets/desktop/icon-search.svg'
import iconLocation from './assets/desktop/icon-location.svg'
import { useContext } from 'react'
import { ThemeContext } from './contexts/themeContext'

function App(){
  
  const {theme} = useContext(ThemeContext)

  return (
    <Layout>
      <div className={`app-${theme}`}>
        <main className="main-content">
          <form className={`form form-${theme}`} onSubmit={(event) => event.preventDefault()}>
              <div className="form-control">
                  <img src={iconSearch} alt="loupe logo" />
                  <input placeholder="Filter by title, companies, expertise..." type="text" className='company-input'/>
                  <ModalPortal />
              </div>
              <div className="form-control">
                  <img src={iconLocation} alt="" />
                  <input placeholder="Filter by location..." type="text" />
              </div>
              <div className="form-control">
                  <input id="fullTime" type="checkbox" />
                  <label htmlFor="fullTime">Full Time Only</label>
                  <Button>Search</Button>
              </div>
          </form>
          <div className="card-container">
            {Jobs?.map(job => <Link key={job.id} to={job.id.toString()}><Card  jobPost={job}/></Link>)}
            <Button>Load More</Button>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default App
