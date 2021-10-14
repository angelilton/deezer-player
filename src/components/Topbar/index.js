import React from 'react'
import * as S from './styles'

import { GoSearch } from 'react-icons/go'

const Topbar = () => (
  <S.Wrapper>
    <S.ButtonIcon>
      <GoSearch size={22} />
    </S.ButtonIcon>
    <S.Input placeholder="buscar a sua musica favorita" />
  </S.Wrapper>
)

export default Topbar
