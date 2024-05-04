export default function NavBar(){

    
    
    
    return(
        <div className="header" >

            <div className="logo">
                <a className="logo" href="/">
                    <img src="https://www.finaq.com.br/wp-content/uploads/2023/12/logo-finaq.svg" alt="finaq" className="logo" height="40px"></img>
                </a>
            </div>

            <div className="link-btn">
                <a className="link" href="https://www.finaq.com.br/#hero">Inicio</a>
                <a className="link" href="#Sobre">Sobre</a>
                <a className="link" href="#beneficios">Benefícios</a>
                <a className="link" href="#como-participar">Como Participar</a>
                <a className="link" href="#perguntas">Perguntas Freguentes</a>
                <button className="cad-btn" type="button">Inscreva-se</button>
            </div>
        </div>
    );
}