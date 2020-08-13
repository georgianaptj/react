import React from 'react'

import { ExampleComponent } from 'my-library'
import 'my-library/dist/index.css'
import Button from './components/button-component/button.component'
import Table from './components/table-component/table.component'
import TerraTable from './components/terra-table-component/terra-table.component'

function App() {
  return (
    <div className='App'>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button></Button>
      <br></br>
      <br></br>
      <h3> Terra Table </h3>
      <TerraTable></TerraTable>
      <br></br>
      <br></br>
      <h3> HTML Table </h3>
      <Table></Table>
      <br></br>
      <br></br>
    </div>
  )
}

export default App
