import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


import {
  Container, BottomMenu, BottomMenuButton, BottomMenuText,
} from './styles';

export default function () {
  return (
    <Container>
      <BottomMenu>
        <BottomMenuButton>
          <Icon name="event" size={24} color="#fff" />
          <BottomMenuText>Consultas agendadas</BottomMenuText>
        </BottomMenuButton>
        <BottomMenuButton>
          <Icon name="search" size={24} color="#fff" />
          <BottomMenuText>Buscar consultas</BottomMenuText>
        </BottomMenuButton>
        <BottomMenuButton>
          <Icon name="person" size={24} color="#fff" />
          <BottomMenuText>Meu perfil</BottomMenuText>
        </BottomMenuButton>
        <BottomMenuButton>
          <Text>Ola</Text>
        </BottomMenuButton>
        <BottomMenuButton>
          <Text>Ola</Text>
        </BottomMenuButton>
      </BottomMenu>
    </Container>
  );
}
