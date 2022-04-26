import React from "react";
import { categories } from '../../utils/categories';

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Data
} from "./styles";



export interface TransactionCardProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: String;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({data} : Props){

    // PEGA A PRIMEIRA POSSIVÇÃO DO [CATEGORY] E USA 
    const [category]  = categories.filter(
        item => item.key === data.category
      );
    return(
        <Container>
            <Title>
                {data.name}
            </Title>
            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon}/>
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Data>{data.date}</Data>
            </Footer>

        </Container>
    )
}