import React from 'react'
import {Link, browserHistory} from 'react-router';

export default function App({children}) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/ex02">Example 02</Link>
        {' '}
        <Link to="/ex02/peter">Example 02 with parameter</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/ex02')}>Go to Example 02</button>
        <button onClick={() => browserHistory.push('/todos')}>Todos</button>
        <button onClick={() => browserHistory.push('/youtube')}>Youtube</button>
      </div>
      <div style={{marginTop: '1.5em'}}>{children}</div>
    </div>
  )
}
