import React, {useState} from 'react';
import {Modal,TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import {Input} from '../../components/Forms/Input'
import {InputForm} from '../../components/Forms/InputForm'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {Button} from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { 
    Container,
    Header,
    Title,
    Form,
    Filds,
    TransactionsTypes

} from './styles';

interface FormData {
  [name: string]: any;
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
  amount: Yup
  .number()
  .typeError('Informe um valor númerico')
  .positive('O valor não pode ser negativo')
  .required('O valor é obrigatório'),
});


export function Register(){

    const [category, setCategory] = useState({
      key: 'category',
      name: 'Categoria'
    });

    //foi criado para lidar com os inputs do formulário e importado da ferramenta hook form
    const {
      control,  // que servir para registrar os inputs em nosso formulário
      handleSubmit, // função que pega os valores do formulário e envia
      formState: {errors} // serve para capturar os erros e melhorar a experiência do usuário
    } = useForm({
      resolver: yupResolver(schema) // vai fazer com que o envio dos valores dos enviados siga um padrão
    }); 
  

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
      setTransactionType(type);
    }

    function handleCloseSelectCategoryModal(){
      setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal(){
      setCategoryModalOpen(true);
    }

    function handleRegister(form: FormData){

      if(!transactionType)
      return Alert.alert('Selecione o tipo da transação');

      if(category.key === 'category')
      return Alert.alert('Selecione a categoria');

      const data = {
        name: form.name,
        amount: form.amount,
        transactionType,
        category: category.key
      }
      console.log('Log: data', data)
    }

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
              <Title>CADASTRO</Title>
          </Header>
          <Form>
            <Filds>
              <InputForm 
                  name="name"
                  control={control}
                  placeholder="Nome"
                  autoCapitalize="sentences"
                  autoCorrect={false}
                  error={errors.name && errors.name.message}
                  
              />
              <InputForm
               name="amount"
                control={control}
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}
               
              />

              <TransactionsTypes>
                <TransactionTypeButton
                  type='up'
                  title="Income"
                  onPress={() => handleTransactionsTypeSelect('up')}
                  isActive={transactionType=== 'up'}
                />
                <TransactionTypeButton
                  type='down'
                  title="Outcome"
                  onPress={() => handleTransactionsTypeSelect('down')}
                  isActive={transactionType=== 'down'}
                />
              </TransactionsTypes>  
              <CategorySelectButton 
                title={category.name}
                onPress={handleOpenSelectCategoryModal}
              />
            </Filds>
            <Button 
              title="Enviar"
              onPress={handleSubmit(handleRegister)}
            />
          </Form>
          <Modal visible={categoryModalOpen}>
            <CategorySelect
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
            />
          </Modal>
          
        </Container>
      </TouchableWithoutFeedback>  
    );
}