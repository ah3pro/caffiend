import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../context/AuthContext"

export default function Layout (props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const {globalUser, logout} = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? 

                <button onClick={() => logout()}>
                    <p>Logout</p>
                </button>            
            
            : (
                <button onClick={() => setShowModal(true)}>
                    <p>Login / Sign up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>
    )

    const footer = (
        <footer>
                <p><span className="text-gradient">Caffiend</span> was made by <a href="https://www.ah3pro.com">AH3Pro</a> using the <a href="https://www.fantacsss.smoljames.com" target="_blank">FantaCSS</a> design library. <br />Check out the project on <a href="https://www.github.com/ah3pro" target="_blank">GitHub</a>.</p>
        </footer>
    )

    function handleCloseModal(){
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal}/>
                </Modal>
            )}
            {header}
            <main>
                {children}    
            </main>
            {footer}
        </>
    )
}