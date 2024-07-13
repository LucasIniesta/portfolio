import styles from './Card.module.css'
import ButtonA from './ButtonA'
import {useState} from 'react'

function Card({image, title, tech, description, repo, site}){
    const [showData, setShowData] = useState(false)

    function dataOn(){
        setShowData(true)
    }

    function dataOf(){
        setShowData(false)
    }
    
    return(
        <div onMouseLeave={dataOf} className={styles.card}>
            <a onMouseEnter={dataOn} href={site} target='_blank'><img src={image}/></a> 

            {showData &&(
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologias: </strong> {tech}</p>
                    <p>{description}</p>
                    <ButtonA link={repo} text='Acesse o repositório'/>
                </section>
                )}

        </div>
    )
}

export default Card