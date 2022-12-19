import { Provider } from 'react-redux';
import './App.css';
import Routing from './routes';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <Provider  store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <Routing/>
       </PersistGate>
    </Provider>
  );
}

export default App;
