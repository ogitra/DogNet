import React from 'react';
import { UseContext } from '../../../Hooks/useStorage';
import UseForm from '../../../Hooks/useForm';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Title from '../../UI/Title/Title';
import Error from '../../UI/Error/Error';

const LoginPasswordLost = () => {
  const useEmail = UseForm('email');
  const { handleLoginLost, loading, error } = React.useContext(UseContext);
  const body = { email: useEmail.value };

  return (
    <div>
      <Title>Perdeu a senha?</Title>
      <form onSubmit={(evt) => handleLoginLost(evt, body)}>
        <Input id={'Email'} label={'Email'} {...useEmail} />
        {loading ? <Button>Carregando...</Button> : <Button>Enviar</Button>}
        {error && <Error> {error} </Error>}
      </form>
    </div>
  );
};

export default LoginPasswordLost;
