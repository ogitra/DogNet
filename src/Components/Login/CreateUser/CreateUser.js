import React, { useEffect } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';
import Error from '../../UI/Error/Error';
import useForm from '../../../Hooks/useForm';
import { UseContext } from '../../../Hooks/useStorage';

const CreateUser = () => {
  const useUser = useForm('newUser');
  const useEmail = useForm('email');
  const usePassword = useForm('password');

  const { loading, error, handleCreateUser, cleanError } = React.useContext(UseContext);

  useEffect(() => {
    cleanError();
  }, []);

  const body = {
    email: useEmail.value,
    password: usePassword.value,
    returnSecureToken: true,
    displayName: useUser.value,
  };

  return (
    <div>
      <Title>Cadastre-se</Title>
      <form onSubmit={(evt) => handleCreateUser(evt, body)}>
        <Input label={'Usuário'} {...useUser} />
        <Input label={'E-mail'} {...useEmail} />
        <Input label={'Senha'} {...usePassword} />
        {loading ? <Button>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        {error && <Error> {error} </Error>}
      </form>
    </div>
  );
};

export default CreateUser;
