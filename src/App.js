import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/quotes' element={''}/>
        <Route path='/quotes/:quoteId' element={''}/>
        <Route path='/new-quote' element={''}/>
      </Routes>
    </div>
  );
}

export default App;
