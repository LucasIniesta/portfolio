import styles from './Card.module.css'
import ButtonA from './ButtonA'
 
import dncWeather from '../../Images/projetos/dncWeather.jpg'

function Card(){
    return(
        <div className={styles.card}>
            <img src={dncWeather}/>
            <section>
                <h3>Título</h3>
                <p><strong>Tecnologias: </strong> tecs</p>
                <p>Descrição</p>
                <ButtonA text='Acesse o repositório'/>
            </section>
        </div>
    )
}

export default Card