import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h2>Bem-vindo ao meu Portfólio</h2>
            <h1>Olá, eu sou Lucas - Desenvolvedor Full Stack</h1>
            <p>
                Como desenvolvedor Full Stack, possuo experiência abrangente em várias tecnologias essenciais para a construção de aplicações web modernas. <br/>
                Minha expertise inclui HTML, CSS e JavaScript, ferramentas fundamentais para criar interfaces de usuário interativas e responsivas. <br/>
                Além disso, sou proficiente em React, um poderoso framework que utilizo para desenvolver aplicações dinâmicas e escaláveis. <br/>
                Tenho também habilidades sólidas no consumo de APIs, o que me permite integrar funcionalidades externas de forma eficiente e segura, <br/>
                aprimorando a experiência do usuário e a funcionalidade dos meus projetos. Estou sempre em busca de novos desafios e oportunidades <br/>
                para aplicar e expandir minhas habilidades, contribuindo para projetos inovadores e impactantes.
            </p>
            <ButtonA text='Conecte-se comigo!!' link='https://github.com/LucasIniesta'/>
        </div>
    )
}

export default Presentation