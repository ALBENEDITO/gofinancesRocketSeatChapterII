import React, { useCallback, useEffect, useState } from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreenting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards, 
    Transaction,
    Title,
    TransactionList,
    LogoutButton
 } from './styles';


export interface DataListProps extends TransactionCardProps {
    id: number;
}
export function Dashboard(){
    const [data, setData] = useState<DataListProps[]>([]);

    async function loadTransactions(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];

        const transactionsFormatted: DataListProps[] = transactions
        .map((item: DataListProps) => {
  
        const amount = Number(item.amount)
        .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
  
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(item.date));
  
        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        }
  
      });

      setData(transactionsFormatted);
      console.log(transactionsFormatted);
    }  

    useEffect(() => {
        loadTransactions();

        //LIMPANDO A LISTA
        // const dataKey = '@gofinances:transactions';
        // AsyncStorage.removeItem(dataKey);
      },[]);
  
      useFocusEffect(useCallback(() => {
        loadTransactions();
      },[]));

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/32573441?v=4'}}
                        />
                        <User>
                            <UserGreenting>Olá, </UserGreenting>
                            <UserName>Allan</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {}}>
                      <Icon name="power"/>
                    </LogoutButton>
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última Entrada dia 13 de Abril"
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última Saídas dia 03 de Abril"
                />
                  <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.1410,00"
                    lastTransaction="01 à 16 de Abril"
                />
            </HighlightCards>  
            <Transaction>
                <Title>Listagem</Title>
                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id.toString() }
                    renderItem={({ item }) => <TransactionCard data={item}/> }
                /> 
            </Transaction> 
        </Container>
    )
}