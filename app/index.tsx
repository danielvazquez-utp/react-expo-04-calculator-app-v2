import { CalculatorButton } from '@/components/CalculatorButton';
import { CustomText } from '@/components/CustomText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={ globalStyles.calculatorContainer }>
            <View style={{paddingHorizontal: 30, marginBottom: 20}}>
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

            <View style={ globalStyles.row }>
                <CalculatorButton 
                    label='C' 
                    blackText
                    color={ Colors.lightGary }
                    onPress={() => console.log('C')} 
                />
                <CalculatorButton 
                    label='+/-' 
                    blackText
                    color={ Colors.lightGary }
                    onPress={() => console.log('+/-')} 
                />
                <CalculatorButton 
                    label='del' 
                    blackText
                    color={ Colors.lightGary }
                    onPress={() => console.log('del')} 
                />
                <CalculatorButton 
                    label='+' 
                    color={ Colors.orange }
                    onPress={() => console.log('/')} 
                />
            </View>

            <View style={ globalStyles.row }>
                <CalculatorButton 
                    label='7' 
                    onPress={() => console.log('7')} 
                />
                <CalculatorButton 
                    label='8' 
                    onPress={() => console.log('8')} 
                />
                <CalculatorButton 
                    label='9' 
                    onPress={() => console.log('9')} 
                />
                <CalculatorButton 
                    label='x' 
                    color={ Colors.orange }
                    onPress={() => console.log('x')} 
                />
            </View>

            <View style={ globalStyles.row }>
                <CalculatorButton 
                    label='4' 
                    onPress={() => console.log('4')} 
                />
                <CalculatorButton 
                    label='5' 
                    onPress={() => console.log('5')} 
                />
                <CalculatorButton 
                    label='6' 
                    onPress={() => console.log('6')} 
                />
                <CalculatorButton 
                    label='-' 
                    color={ Colors.orange }
                    onPress={() => console.log('-')} 
                />
            </View>

            <View style={ globalStyles.row }>
                <CalculatorButton 
                    label='1' 
                    onPress={() => console.log('1')} 
                />
                <CalculatorButton 
                    label='2' 
                    onPress={() => console.log('2')} 
                />
                <CalculatorButton 
                    label='3' 
                    onPress={() => console.log('3')} 
                />
                <CalculatorButton 
                    label='+' 
                    color={ Colors.orange }
                    onPress={() => console.log('+')} 
                />
            </View>

            <View style={ globalStyles.row }>
                <CalculatorButton 
                    label='0' 
                    doublesize
                    onPress={() => console.log('0')} 
                />
                <CalculatorButton 
                    label='.' 
                    onPress={() => console.log('.')} 
                />
                <CalculatorButton 
                    label='=' 
                    color={ Colors.orange }
                    onPress={() => console.log('=')} 
                />
            </View>

        </View>
    )
}

export default CalculatorApp;