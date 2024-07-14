import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const texts = ['Lucas Iniesta Simões', 'Desenvolvedor Front-end'];
    const [loop, setLoop] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const[delta, setDelta] = useState(100);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, [delta])
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % texts.length
        let fullText = texts[i]  
        let updatedText = deleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);

        if(!deleting && updatedText === fullText){
            setDeleting(true)
            setDelta(40)
        } else if (deleting && updatedText === ''){
            setDeleting(false)
            setDelta(100)
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation} id="Presentation">
            <h2>Bem-vindo ao meu Portfólio</h2>
            <h1>Olá, eu sou {text}</h1>
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