import styles from './Projects.module.css'
import ButtonA from '../elements/ButtonA'
import Card from '../elements/Card'

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card/>
            <Card/>
            <Card/>
            <ButtonA text='Ver repositório completo'/>  
        </div>
    )
}

export default Projects