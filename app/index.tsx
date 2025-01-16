import { CustomText } from '@/components/CustomText';
import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={ globalStyles.calculatorContainer }>
            <CustomText variant='h1'>
                50 x 20
            </CustomText>
            <CustomText variant='h2'>
                50 x 20
            </CustomText>
            <CustomText
                variant='h1'
            >
                Lorem ipsum dolor sit amet 
            </CustomText>
        </View>
    )
}

export default CalculatorApp;