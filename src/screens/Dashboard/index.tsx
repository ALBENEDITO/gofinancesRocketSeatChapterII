import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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
    TransactionList
 } from './styles';


import { StatusBar } from 'react-native'

export function Dashboard(){

    const data= [
        {
        title: "Desenvolvimento de Site",
        amount: "R$ 12.000,00",
        category: {
            name:'Vendas',
            icon: 'dollar-sign'
        },
        date: "14/02/2050"
        },
        {
        title: "Desenvolvimento de Site",
        amount: "R$ 12.000,00",
        category: {
            name:'Vendas',
            icon: 'dollar-sign'
        },
        date: "14/02/2050"
        },
        {
        title: "Desenvolvimento de Site",
        amount: "R$ 12.000,00",
        category: {
            name:'Vendas',
            icon: 'dollar-sign'
        },
        date: "14/02/2050"
        }

    ];

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
                    <Icon name="power"/>
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
                    renderItem={({ item }) => <TransactionCard data={item}/> }
                    showsHorizontalScrollIndicator={false}
                    
                /> 
            </Transaction> 
        </Container>
    )
}