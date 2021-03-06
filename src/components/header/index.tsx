import React from 'react'
import styled from 'styled-components'

export type HeaderProps = {
  title?: string
}

const HeaderComponent = styled.header`
  padding: 1.25rem;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 1.875rem;
`

export const Header: React.FC<HeaderProps> = ({
  title = 'Air Quality Index',
}) => {
  return <HeaderComponent>{title}</HeaderComponent>
}
