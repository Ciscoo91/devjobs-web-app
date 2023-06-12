import { useContext, Dispatch, SetStateAction, ChangeEventHandler, FormEvent, FormEventHandler } from 'react'
import "./Modal.css"
import { ThemeContext } from '../../contexts/themeContext'
import {motion} from "framer-motion"
import iconLocation from "../../assets/desktop/icon-location.svg"

type ModalProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>
    showModal: boolean,
    handleSearch: FormEventHandler
    handleLocationChange: ChangeEventHandler<HTMLInputElement>,
    handleFulltimeChange: ChangeEventHandler<HTMLInputElement>
}

export default function Modal({ setShowModal, showModal, handleFulltimeChange, handleLocationChange, handleSearch}: ModalProps) {

    const {theme} = useContext(ThemeContext)

    function closeModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()
        setShowModal(false)
    }


    return (
        <div className={`${theme}`}>
            {showModal && <div onClick={() =>setShowModal(false)} className="modal-overlay"></div>}
            <motion.form 
                className={`modal modal-${theme}`}
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                onSubmit={handleSearch}
            >
                <div className="modal-form-control">
                    <img src={iconLocation} alt="location icon representation" />
                    <input placeholder="Filter by location..." type="text" onChange={(e) => handleLocationChange(e)} />
                </div>
                <div className="modal-form-control">
                    <input name="fullTime" id="fullTime" type="checkbox" onChange={handleFulltimeChange}/>
                    <label htmlFor="fullTime">Full Time Only</label>
                    <button className="modal-button" type="submit" onClick={(event) => closeModal(event)}>Search</button>
                </div>
            </motion.form>
        </div>
    )
}
