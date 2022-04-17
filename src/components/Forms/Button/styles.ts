import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {TouchableOpacity} from 'react-native'

export const Container =  styled(TouchableOpacity)`
width: 100% ;
background-color: ${({ theme }) => theme.colors.secundary_button};;
border-radius: 5px;
align-items:center ;
padding:18px;
`;


export const Title =  styled.Text`
color: ${({ theme }) => theme.colors.shape};
font-family: ${({ theme }) => theme.fonts.medium};
font-size: ${RFValue(14)}px;;

`;