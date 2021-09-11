import React, { Fragment } from 'react';

const store = ['', '', ''];

const Column = () => {
  return (
    <tr>
      <td>Tênis</td>
      <td>Roupa</td>
    </tr>
  )
}

const App = () => {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>
  )

  return (
    <table>
      {store.map(renderColumns)}
    </table>
  )
}

export default App
