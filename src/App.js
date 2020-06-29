import React from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './QuoteMachineState'


const store = createStore(rootReducer)

class App extends React.Component {
  

render() {
 return(
   <Provider store={store}>
    <QuoteMachine/>
    </Provider>
  
  )
 }
};
export default App;
