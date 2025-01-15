import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={ globalStyles.calculatorContainer }>
            <Text
                style={ globalStyles.mainResult }
            >
                50 x 20
            </Text>
            <Text
                style={ globalStyles.subResult }
            >
                50 x 20
            </Text>
        </View>
    )
}

export default CalculatorApp;