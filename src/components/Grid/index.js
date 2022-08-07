import React from 'react'
import './Grid.styles'
import { Content, Wrapper } from './Grid.styles'

export const Grid = ({header, children}) => {
  return (
    <Wrapper >
        <h1>{header}</h1>
        <Content >
            {children}
        </Content>
    </Wrapper>
  )
}
