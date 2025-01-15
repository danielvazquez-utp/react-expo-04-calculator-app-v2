import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

// interface Props extends TextProps{
     // Para no escribir las propiedades de texto que se desean agregar al componente, se recomienda heredarlas del componente de Texto de react-native
    //  children: string,
// }

interface Props extends TextProps {
    variant?: 'h1' | 'h2',
}

export const CustomText = ({ children, variant, ...rest }:Props) => {
  return (
      <Text 
        style={[
            {
            color: 'white', 
            fontFamily: 'SpaceMono',
            },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h1' && globalStyles.subResult,
        ]}
        
        { ...rest }
      >
        {  children }
    </Text>
  )
}