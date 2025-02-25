

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import {Platform, Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

const isAndroid = Platform.OS === 'android';

interface Props {
    label: string,
    color?: string,
    blackText?: boolean,
    onPress: () => void,
    doublesize?: boolean
}

export const CalculatorButton = ({ 
        label, 
        color=Colors.darkGray, 
        blackText=false, 
        doublesize=false, 
        onPress 
    }:Props) => {
  return (
    <Pressable 
        style={({ pressed }) => ({
            ... globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doublesize ? 180: 80,
        }) }
        onPress={ () => {
                if(isAndroid){
                    Haptics.selectionAsync()
                }
                onPress();
            }
        }
    >
        <Text 
            style={{ 
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white',

            }}

        >{ label }</Text>
    </Pressable>
  )
}
