import React from 'react';

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const valid = {
    user: {
      message: 'Coloque o usuário',
      type: 'text',
    },
    password: {
      message: 'Coloque sua senha',
      type: 'password',
    },
    cep: {
      message: 'Coloque o CEP correto',
      regex: /^\d{5}-\d{3}$/,
      type: 'text',
    },
    newUser: {
      message: 'Insira seu nome',
      type: 'text',
    },
    email: {
      message: 'Insira seu email',
      type: 'email',
    },
    newPost_Name: {
      message: 'Insira um nome',
      type: 'text',
    },
    newPost_Weight: {
      message: 'Insira um peso',
      type: 'number',
    },
    newPost_Age: {
      message: 'Insira a idade',
      type: 'number',
    },
  };

  function validateInput(value) {
    if (value.length === 0) {
      setError(valid[type].message);
    } else if (type === 'cep') {
      const validate = valid[type].regex.test(value);
      if (!validate) {
        setError(valid[type].message);
      } else {
        setError('');
      }
    } else {
      setError('');
      setValue(value);
    }
  }

  return {
    value,
    onBlur: ({ target }) => validateInput(target.value),
    error,
    type: valid[type].type,
  };
};

export default useForm;
