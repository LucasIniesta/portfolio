import styles from './Card.module.css'
import ButtonA from './ButtonA'

function Card({image, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site} target='_blank'><img src={image}/></a> 
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias: </strong> {tech}</p>
                <p>{description}</p>
                <ButtonA link={repo} text='Acesse o repositório'/>
            </section>
        </div>
    )
}

export default Card