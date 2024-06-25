import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

interface CustomHeaderProps {
  title: string;
}

const HeaderContainer = styled.View`
  height: 60px;
  background-color: #f8f8f8;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const CustomHeader: React.FC<CustomHeaderProps> = ({title}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default CustomHeader;
