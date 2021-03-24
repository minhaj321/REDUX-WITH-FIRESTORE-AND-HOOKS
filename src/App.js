import './App.css';
import firestore from './FirebaseFirestore/Firestore';
// import HooksRedux from './components/hooksredux';
// import Input from './components/input';
// import {Provider} from 'react-redux';
// import ErrorTesting from './components/errortesting';
// import store from "./redux/cakes/cakestore";
// import CreateContext from './useContextHook/createcontext.js';
import Firestore from "./FirebaseFirestore/Firestore";
function App() {
  return (
    // <Provider store={store}>
    <div className="App">

<Firestore/>
    </div>
    // </Provider>
  );
}

export default App;
