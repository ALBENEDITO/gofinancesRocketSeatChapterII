import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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

export interface DataListProps extends TransactionCardProps {
    id: number;
}
export function Dashboard(){

    const data: DataListProps[] = [
        {
        id: 1,
        type: 'positive',
        title: "Desenvolvimento de Site",
        amount: "R$ 12.000,00",
        category: {
            name:'Vendas',
            icon: 'dollar-sign'
        },
        date: "14/02/2050"
        },
        {
        id: 2,
        type: 'negative',
        title: "Pizza",
        amount: "R$ 59,00",
        category: {
            name:'Alimentação',
            icon: 'coffee'
        },
        date: "14/02/2050"
        },
        {
        id: 3,
        type: 'negative',
        title: "ALUGUEL DO APARTAMENTO",
        amount: "R$ 1200,00",
        category: {
            name:'Alimentação',
            icon: 'shopping-bag'
        },
        date: "14/02/2050"
        },
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
                    keyExtractor={item => item.id }
                    renderItem={({ item }) => <TransactionCard data={item}/> }
                /> 
            </Transaction> 
        </Container>
    )
}