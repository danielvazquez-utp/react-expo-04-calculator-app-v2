import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide= '/'
}

export const useCalculator = () => {
  
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        
        // Todo: Calcular resultado
        setFormula( number );

    }, [number])
    

    const buildNumber = ( numberString: string ) => {
        
        // Verificando si existe un punto decimal en el número
        if ( number.includes('.')  && numberString==='.'  ) return;

        if ( number.startsWith('0') || number.startsWith('-0') ) {
            if (numberString === '.') {
                return setNumber( number + numberString );
            }

            // Verificando si es otro cero sin punto
            if (numberString==='0'  && number.includes('.')) {
                return setNumber( number + numberString );
            }

            // Verificando si es diferente de createBottomTabNavigator, no hay punto y es el primer número
            if ( numberString !=='0' && !number.includes('.')) {
                return setNumber( numberString );
            }

            // Verificando si no hay multiples ceros antes del punto
            if ( numberString==='0' && !number.includes('.') ) return;
        }

        setNumber( number + numberString );
    }

    return {
        // Properties
        formula,
        number,
        prevNumber,
        // Methods
        buildNumber

    }


}