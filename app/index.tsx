import { CustomText } from '@/components/CustomText';
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
            <CustomText 
                numberOfLines={ 1 }
                adjustsFontSizeToFit={ true }
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat justo at tortor posuere maximus. Donec venenatis quis purus vitae mollis. Suspendisse diam ante, pulvinar vel neque eu, semper fringilla urna. 
            </CustomText>
        </View>
    )
}

export default CalculatorApp;