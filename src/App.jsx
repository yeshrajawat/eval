import './App.scss';
import AutoSlide from './component/AutoSlide/AutoSlide';
import Card from './component/Card/Card';

function App() {
  return (
    <div className='app'>
      <AutoSlide className="autoplay"/>
      <Card className='card'/>
      <Card className='card'/>

    </div>

  );
}

export default App;
