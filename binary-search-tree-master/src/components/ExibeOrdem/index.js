import React from 'react'
import {CSSTransition, TransitionGroup}from 'react-transition-group'
//import {Container} from './styles'
export default function ExibeOrdem({array}) {
  return (
    <div className="numbers-container">
    <ul className="numbers-list">
      <TransitionGroup component={null}>
        {array.map((num, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <li className="numbers-list-item" key={index}>
              {num}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  </div>
)
  
}

