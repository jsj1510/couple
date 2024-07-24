import React from 'react';

import * as S from './emotion'


interface CustomHeaderProps {
  title: string;
}



const Header: React.FC<CustomHeaderProps> = ({title}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
