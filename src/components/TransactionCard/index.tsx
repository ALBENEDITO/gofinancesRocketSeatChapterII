import React from "react";

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

interface Category {
    name: string;
    icon: string;
}

interface Data {
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
    data: Data;
}

export function TransactionCard({data} : Props){

    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount>{data.amount}</Amount>
            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Data>{data.date}</Data>
            </Footer>

        </Container>
    )
}