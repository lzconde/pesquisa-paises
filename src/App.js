
import './App.css';
import Paises from './components/paises/pesquisaPaises';
import {Provider} from "react-redux"; //Conecta toda a Aplicação com a Store
import store from "./store";

function App() {
  return (
        //O Provider deve ficar fora de toda a aplicação
      <Provider store={store}>
      <Paises/>
      </Provider>
      
  );
} 

export default App;
