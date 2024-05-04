
const style_modal ={
    top:'0',
    button:'0',
    background:'0,0,0,0.5'
}
export default function modal(){
    return(
        <div className="Container-Modal" style={style_modal}> 
            <div>
                <form>
                    <label>Digite seu nome</label>
                    <input type="text" placeholder="Nome"/>
                </form>
                
            </div>
        </div>
    )
}