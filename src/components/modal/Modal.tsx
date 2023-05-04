import React, { useContext } from 'react'
import styles from "./Modal.module.css"
import { ThemeContext } from '../../contexts/themeContext'

type ModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
}

export default function Modal({ setShowModal, showModal}: ModalProps) {

    const {theme} = useContext(ThemeContext)


    function closeModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()
        setShowModal(false)
    }

    return (
        <div>
            {showModal && <div onClick={(event) =>setShowModal(false)} className={styles.overlay}></div>}
            <div className={`${styles.modal} ${theme}`}>
                <div className={styles.formControl}>
                    <img src="assets/desktop/icon-location.svg" alt="" />
                    <input placeholder="Filter by location..." type="text" />
                </div>
                <div className={styles.formControl}>
                    <input name="fullTime" id="fullTime" type="checkbox" />
                    <label htmlFor="fullTime">Full Time Only</label>
                    <button className={`${styles.button} ${theme}`} onClick={(event) => closeModal(event)}>Search</button>
                </div>
            </div>
        </div>
    )
}
