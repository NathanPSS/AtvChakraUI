
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import FinancialCard from './components/Card/FinancialCard'

function App() {

  return (
    <Grid gap={10} templateColumns={'repeat(5, 1fr)'}>
      <GridItem w='100%'>
      <FinancialCard title='Rendimentos Mensais' description='Aplicações CDB' type='increase' value='$30,45' statValue='0,93%'/>
      </GridItem>
    <GridItem w='100%'>
    <FinancialCard title='Contas Basicas' description='Conta de luz' type='decrease' value='$60,42' />
    </GridItem>
  
    </Grid>
  )
}

export default App
