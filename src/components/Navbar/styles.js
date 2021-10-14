import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 30vh;
  height: 100vh;

  box-shadow: 1px 1px hsl(0, 0%, 90%);

  iframe {
    margin-left: 1px;
  }
`

export const Logo = styled.div`
  width: 180px;
  height: 50px;
  align-self: center;
  padding: 8px;

  img {
    width: 100%;
  }
`
