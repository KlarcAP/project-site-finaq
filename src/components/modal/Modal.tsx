export default function Modal (){
    return (
        <div>
             <div><h1>O finaq investe em você</h1></div>
             <form>
                <div>
                <label typeof="text" id="name" className="name">Name</label>
                <input type="text" className="input-name" />
                </div>
                <div>
                <label typeof="text" id="telefone" className="telefone">Telefone</label>
                <input type="text" className="input-tell" />
                </div>
                <div>
                <label typeof="email" id="email" className="email">E-mail</label>
                <input type="email" className="input-email" />
                </div>
                <div id="estados">
                <select className="estado-select" name="" value="" id="mauticform_input_finaqinscritos_lead_uf"> 
                    <option value="">Escolha seu estado</option>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Tocantins">Tocantins</option></select>
             </div>
             </form>
             
        </div>
    )
}