import styles from './Navbar.module.css'
import { FaInstagram } from "react-icons/fa6"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation' >Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/iniesta_lucas/' target='_blank'><FaInstagram size={35}/></a></li>
                <li><a href='https://github.com/LucasIniesta' target='_blank'><FiGithub size={35}/></a></li>
                <li><a href='https://www.linkedin.com/in/lucas-iniesta-simoes/' target='_blank'><FiLinkedin size={35}/></a></li>
            </ul>       
        </div>
    )
}

export default Navbar