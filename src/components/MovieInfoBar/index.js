import React from 'react'
import {Wrapper, Content} from './MovieInfoBar.styles'
//Helpers
import {calcTime, convertMoney} from '../../helpers'

export const MovieInfoBar = ({time, budget, revenue}) => {
  return (
    <Wrapper>
        <Content>
        <div className='column'>
            <p>Running time: {calcTime(time)}</p>
        </div>
        <div className='column'>
            <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className='column'>
            <p>Revenue: {convertMoney(revenue)}</p>
        </div>

        </Content>
    </Wrapper>
  )
}
