import React from 'react'
import * as S from './styles'

const trackId = 415821042

const Navbar = () => (
  <S.Wrapper>
    <S.Logo>
      <img src="./deezer-logo-no-bg.png" alt="logo deezer" />
    </S.Logo>
    <p>favoritos</p>
    <iframe
      title="deezer-widget"
      src={`https://widget.deezer.com/widget/dark/track/${trackId}`}
      width="100%"
      height="300"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media; clipboard-write"
    ></iframe>
  </S.Wrapper>
)

export default Navbar
