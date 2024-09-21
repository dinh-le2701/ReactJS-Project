import 'bootstrap/dist/css/bootstrap.min.css';
import RenderLineChart from '../src/charts/RenderLineChart.js'
import AreaChartPage from './charts/AreaChart.js';
import BarChart from './charts/BarChart.js';
import PieChart from './charts/PieChart.js';
import LineBarAreaChart from './charts/LineBarAreaChart.js';
import  Container  from 'react-bootstrap/Container'
import { CostChart } from './charts/CostChart.js';


function App() {
  return (
    <div className="App">
      <Container>
        <RenderLineChart />
        <AreaChartPage />
        <BarChart />
        <LineBarAreaChart/>
        <PieChart/>
        <CostChart/>
      </Container>
    </div>
  );
}

export default App;
