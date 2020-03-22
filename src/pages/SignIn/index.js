import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <View>
        <Text>SignIn</Text>
        <Button
          title="Go to SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
