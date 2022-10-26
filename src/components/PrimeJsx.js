
function PrimeJsx(){
    // Aqui codamos em JS, montamos nossas funções e manipulamos dados. 
    const variable = 10;
    const array = [41,3,13,4,91]
    // Mapeando um array
    const arrayMap = array.map((num)=>{
        return (<li key={num}>{num}</li>)
    })
    //retorno em JSX do nosso componente
    return(<div>
            <h2>Aqui eu tenho um novo componente</h2>
            <ul>{arrayMap}
                <li>{variable}</li>
                </ul>
        </div>

    )

}
export default PrimeJsx;