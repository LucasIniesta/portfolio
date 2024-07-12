import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa6"
import { FiGithub, FiLinkedin } from "react-icons/fi"

function Footer(){
    return(
        <div className={styles.footer}>
            <p>l.iniesta.94@gmail.com</p>
            <ul>
                <li><a href='https://www.instagram.com/iniesta_lucas/' target='_blank'><FaInstagram size={35}/></a></li>
                <li><a href='https://github.com/LucasIniesta' target='_blank'><FiGithub size={35}/></a></li>
                <li><a href='https://www.linkedin.com/in/lucas-iniesta-simoes/' target='_blank'><FiLinkedin size={35}/></a></li>
            </ul>
            <p>Lucas Iniesta Simões © 2024</p>   
        </div>
    )
}

export default Footer