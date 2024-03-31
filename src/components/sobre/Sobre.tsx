export default function Sobre(){
    return(
        <div className="container-about">
            <div className="videoBox">
                <a href="https://www.youtube.com/watch?v=gFvdzeJAq0A&list=RDgFvdzeJAq0A&index=1" className="play-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                    </svg>
                </a>
            </div>
            <div className="aboutContent">
                <h1>SOBRE</h1>
                <h4>Conheça o <b>Finaq</b>:</h4>
                <h3>Uma Iniciativa de Apoio à Qualificação Profissional!</h3>
                <p>O <b>Finaq</b> é mais do que um fundo de incentivo – é uma comunidade de empresas e empresários comprometidos em fortalecer a força de trabalho do Brasil. Com uma visão voltada para o futuro, buscamos proporcionar oportunidades de qualificação profissional para indivíduos em todo o país, promovendo o crescimento econômico e social.</p>
            </div>
        </div>
    );
}