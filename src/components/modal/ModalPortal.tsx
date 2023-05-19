import React, {useContext, useState} from 'react'
import {createPortal} from "react-dom"
import Modal from './Modal'
import "./ModalPortal.css"
import {ReactComponent as IconSearch} from '../../assets/desktop/icon-search.svg'
import {ReactComponent as IconFilter} from '../../assets/mobile/icon-filter.svg'
import { ThemeContext } from '../../contexts/themeContext'


export default function ModalPortal() {

    const [showModal, setShowModal] = useState<boolean>(false)
    const {theme} = useContext(ThemeContext)

    function renderModal(event: React.MouseEvent){
        event.stopPropagation()
        setShowModal(true)
    }

    return (
        <>
           <button className="filter-icon" onClick={(event) => renderModal(event)}>
                <IconFilter className="filter__icon"/>
            </button>
            <button className={`mobile-search-button ${theme}`}>
                <IconSearch className='search__icon' />
            </button>
            {showModal && <div className='overlay'></div>}
            {showModal && createPortal(
                <Modal showModal={showModal} setShowModal={() => setShowModal(false)} />,
                document.body
            )}
        </>
    )
}
