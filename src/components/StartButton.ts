import styled from 'styled-components'

export const StartButton = styled.button`
  font-style: italic;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 45px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: 0;
  padding: 0 30px;
  line-height: 70px;
  color: #fff;
  transition: 0.15s ease-out background-color;
  font-family: 'PT Mono', monospace;
  text-transform: lowercase;
  outline: none;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`
