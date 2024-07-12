import styles from './Projects.module.css'
import ButtonA from '../elements/ButtonA'
import Card from '../elements/Card'
import dncWeather from '../../Images/projetos/dncWeather.jpg'
import lpArquitetura from '../../Images/projetos/lpArquitetura.jpg'
import portfolio from '../../Images/projetos/portfolio.jpg'

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
                image={dncWeather}
                title='DNC Weather'
                tech='HTML, CSS e JavaScript'
                description='Página para consulta ao clima e informações de CEP'
                repo='https://github.com/LucasIniesta/pagina-previsao-do-tempo-e-consulta-cep'
                site='https://dncweather-consulta-clima-e-cep.netlify.app/'
            />
            <Card
                image={lpArquitetura}
                title='LP Arquitetura'
                tech='HTML e CSS'
                description='Landing Page de um grupo de Arquitetura fictício'
                repo='https://github.com/LucasIniesta/Landing-Page-Arquitetura'
                site='https://testelandingpagearquitetura.netlify.app/'
            />
            <Card
                image={portfolio}
                title='Meu portfolio'
                tech='HTML, CSS, JavaScript e React'
                description='Um portfolio interativo apresentando o que sei fazer'
                repo='https://github.com/LucasIniesta/portfolio'
                site='https://portfolio-9u34ohpho-lucas-iniesta-simoes-projects.vercel.app/'
            />
            <ButtonA link='https://github.com/LucasIniesta?tab=repositories' target='_blank' text='Ver repositório completo'/>  
        </div>
    )
}

export default Projects