export default function Home(){
    return(
        <div className="header" >

            <div className="logo">
                <a className="logo" href="https://www.finaq.com.br/#hero">
                    <img src="https://www.finaq.com.br/wp-content/uploads/2023/12/logo-finaq.svg" alt="finaq" className="logo" height="40px"></img>
                </a>
            </div>

            <div className="link-btn">
                <a className="link" href="https://www.finaq.com.br/#hero">Inicio</a>
                <a className="link" href="#">Sobre</a>
                <a className="link" href="#">Benefícios</a>
                <a className="link" href="#">Como Participar</a>
                <a className="link" href="#">Perguntas Freguentes</a>
                <button className="cad-btn" type="button">Inscreva-se</button>
            </div>
        </div>
    );
}