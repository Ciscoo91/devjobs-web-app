import React, { useContext } from 'react'
import "./Modal.css"
import { ThemeContext } from '../../contexts/themeContext'
import { JobPosting } from '../../types'
import {motion} from "framer-motion"
import iconLocation from "../../assets/desktop/icon-location.svg"

type ModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean,
    setJobPosts : React.Dispatch<React.SetStateAction<JobPosting[]>>
}

export default function Modal({ setShowModal, showModal, setJobPosts}: ModalProps) {

    const {theme} = useContext(ThemeContext)


    function closeModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()
        setShowModal(false)
    }

    return (
        <div className={`${theme}`}>
            {showModal && <div onClick={() =>setShowModal(false)} className="modal-overlay"></div>}
            <motion.div 
                className={`modal modal-${theme}`}
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
            >
                <div className="modal-form-control">
                    <img src={iconLocation} alt="" />
                    <input placeholder="Filter by location..." type="text" />
                </div>
                <div className="modal-form-control">
                    <input name="fullTime" id="fullTime" type="checkbox" />
                    <label htmlFor="fullTime">Full Time Only</label>
                    <button className="modal-button" onClick={(event) => closeModal(event)}>Search</button>
                </div>
            </motion.div>
        </div>
    )
}
