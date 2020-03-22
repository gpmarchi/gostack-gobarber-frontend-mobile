import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

// import { Container } from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <View>
        <Input
          style={{ marginTop: 30 }}
          icon="call"
          placeholder="Digite seu nome"
        />
        <Button
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('SignUp')}
        >
          Entrar
        </Button>
      </View>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
