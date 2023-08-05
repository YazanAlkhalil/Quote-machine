import QuoteText from "./components/QuoteText";
import Button from "./components/Button";
import store from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <div className="QuoteBox container">
        <QuoteText/>
        <Button/>
      </div>
   </Provider>
  );
}

export default App;
