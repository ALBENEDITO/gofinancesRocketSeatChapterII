import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container =  styled.TextInput`
  
`;


export const Title =  styled.Text`
color: ${({ theme }) => theme.colors.shape};
font-family: ${({ theme }) => theme.fonts.regular};
font-size: ${RFValue(18)}px;;
`;