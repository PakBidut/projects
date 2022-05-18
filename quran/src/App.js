import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Ayat from './components/daftar_ayat/ayat';
import Surah from './components/daftar_surah/surah';

function App() {
  return (
    <div>
    <Switch>
        <Dashboard>
          <Route path='/:id' exact component={Ayat}></Route>
          <Route path='/' exact component={Surah}></Route>
        </Dashboard>
        <Route path='/' exact component={Dashboard}></Route>
    </Switch>
    </div>
  );
}

export default App;
