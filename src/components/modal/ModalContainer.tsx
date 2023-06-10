import React, {useContext, useState} from 'react'
import Modal from './Modal'
import "./ModalContainer.css"
import {ReactComponent as IconSearch} from '../../assets/desktop/icon-search.svg'
import {ReactComponent as IconFilter} from '../../assets/mobile/icon-filter.svg'
import { ThemeContext } from '../../contexts/themeContext'
import { JobPosting } from '../../types'

type ModalPortalProps = {
    setJobPosts: React.Dispatch<React.SetStateAction<JobPosting[]>>
}

export default function ModalPortal({setJobPosts} : ModalPortalProps) {

    const [showModal, setShowModal] = useState<boolean>(false)
    const {theme} = useContext(ThemeContext)

    function renderModal(event: React.MouseEvent){
        event.stopPropagation()
        setShowModal(true)
    }

    return (
        <>
           <button className="filter-icon" onClick={(event) => renderModal(event)}>
                <IconFilter className="filter__icon" 
                    style={theme == "light" ? {backgroundColor: "#FFF"} : {backgroundColor: "#19212e"}}
                />
            </button>
            <button className={`mobile-search-button ${theme}`}>
                <IconSearch className='search__icon' />
            </button>
            {showModal && <Modal setShowModal={setShowModal} showModal={showModal} setJobPosts={setJobPosts}/>}
        </>
    )
}
