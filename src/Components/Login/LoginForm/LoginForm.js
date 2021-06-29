import React, { useContext, useEffect } from 'react';
import { UseContext } from '../../../Hooks/useStorage';
import { Link } from 'react-router-dom';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import UseForm from '../../../Hooks/useForm';
import Title from '../../UI/Title/Title';
import Error from '../../UI/Error/Error';

const LoginForm = () => {
  const useUser = UseForm('user');
  const usePassword = UseForm('password');

  const { handleLogin, loading, error, cleanError } = useContext(UseContext);

  useEffect(() => {
    cleanError();
  }, []);

  const bodyToFetchLogin = {
    email: useUser.value,
    password: usePassword.value,
    returnSecureToken: true,
  };

  return (
    <>
      <Title>Login</Title>
      <form style={{ marginBottom: '5rem' }} onSubmit={(evt) => handleLogin(evt, bodyToFetchLogin)}>
        <Input id={'E-Mail'} label={'E-mail'} {...useUser} />
        <Input id={'Senha'} label={'Senha'} {...usePassword} />
        {loading ? <Button>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <Error>Dados Incorretos</Error>}

        <Link to={'/login/perdeu'}>Esqueceu a senha?</Link>
      </form>

      <div>
        <h2>Cadastre-se</h2>
        <p>Ainda não tem uma conta? Cadastre-se no site</p>
        <Link to={'/login/cadastro'}>
          <Button>Cadastro</Button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
