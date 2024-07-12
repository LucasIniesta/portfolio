import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h2>Bem-vindo ao meu Portfólio</h2>
            <h1>Olá, eu sou Lucas Iniesta Simões</h1>
            <p>
            Sou um <strong>Desenvolvedor Front-End</strong> com experiência em <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>  e <strong>React</strong>. Minhas habilidades incluem a criação de interfaces <br/> 
            de usuário interativas e responsivas, além do consumo eficiente de APIs para integrar funcionalidades externas. Estou sempre em busca <br/> 
            de novos desafios para aplicar e expandir minhas habilidades em projetos inovadores.
            </p>
            <ButtonA text='Conecte-se comigo!!' link='https://www.linkedin.com/in/lucas-iniesta-simoes/' target="_blank"/>
        </div>
    )
}

export default Presentation