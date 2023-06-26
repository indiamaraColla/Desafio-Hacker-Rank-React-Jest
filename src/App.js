import 'h8k-components'
import React from 'react'

import TeamList from './components/TeamList'

const title = 'Teams and Channels List'

const App = () => {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <TeamList />
    </div>
  )
}

export default App
