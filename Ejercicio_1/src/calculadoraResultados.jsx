export default function CalcResultado(altura, peso) {

    let imc = peso / (Math.pow(altura, 2))
    
    let categoria = (imc) => {
        if(imc >= 25){
            return "Sobrepeso"
        }else if(imc<18.5){
            return "Bajo peso"
        }else{
            return "Peso adecuado"
        }
    }

    return(
        <>
        <div>
            <h1>Tu IMC es: {imc}</h1>
            <h2>Tu categoria es: {categoria}</h2>
        </div>
        
        </>
    )
}