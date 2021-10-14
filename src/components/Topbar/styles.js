import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding: 2px 10px 15px;
  margin-top: 8px;
  box-shadow: 1px 1px hsl(0, 0%, 90%);
`

export const Input = styled.input`
  min-width: 70vh;
  font-size: 16px;
  margin-left: 10px;
  border: 0;
`

export const ButtonIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 15px;
`
