import { useState } from 'react'
import './App.css'
import Button from './components/button/Button'
import Header from './components/header/Header'
import Card from './components/card/Card'
import Jobs from "./data.json"


function App(){
  
  return (
    <div className="app">
      <Header/>
      <main className="main-content">
        <form className="form">
            <div className="form-control">
                <img src="assets/desktop/icon-search.svg" alt="loupe logo" />
                <input placeholder="Filter by title, companies, expertise..." type="text" />
            </div>
            <div className="form-control">
                <img src="assets/desktop/icon-location.svg" alt="" />
                <input placeholder="Filter by location..." type="text" />
            </div>
            <div className="form-control">
                <input id="fullTime" type="checkbox" />
                <label htmlFor="fullTime">Full Time Only</label>
                <Button>Search</Button>
            </div>
        </form>
        <div className="card-container">
          {Jobs?.map(job => <Card key={job.id} jobPost={job}/>)}
          <Button>Load More</Button>
        </div>
      </main>
    </div>
  )
}

export default App
