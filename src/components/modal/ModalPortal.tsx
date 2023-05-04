import React, {useState} from 'react'
import {createPortal} from "react-dom"
import Modal from './Modal'
import "./ModalPortal.css"
import {ReactComponent as IconSearch} from '../../assets/desktop/icon-search.svg'
import {ReactComponent as IconFilter} from '../../assets/mobile/icon-filter.svg'


export default function ModalPortal() {

    const [showModal, setShowModal] = useState<boolean>(false)

    function renderModal(event: React.MouseEvent){
        event.stopPropagation()
        setShowModal(true)
    }

    return (
        <>
           <button className="filter-icon" onClick={(event) => renderModal(event)}>
                <IconFilter />
            </button>
            <button className="mobile-search-button">
                <IconSearch fill="#FFFFFF" />
            </button>
            {showModal && <div className='overlay'></div>}
            {showModal && createPortal(
                <Modal showModal={showModal} setShowModal={() => setShowModal(false)} />,
                document.body
            )}
        </>
    )
}
