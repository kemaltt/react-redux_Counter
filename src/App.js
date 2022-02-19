import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  reset,
  increaseMore,
} from "./redux/actions/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h2> Counter </h2>
        <div>
          <h1> {counter} </h1>{" "}
        </div>
        <div>
          <button
            onClick={() => dispatch(increase())}
            className="btn-increment"
          >
            Decrease{" "}
          </button>{" "}
          <button onClick={() => dispatch(reset())} className="btn-reset">
            Reset{" "}
          </button>{" "}
          <button
            onClick={() => dispatch(decrease())}
            className="btn-decrement"
          >
            Increase{" "}
          </button>
          <button
            //onClick={() => dispatch(increaseMore())}
            onClick={() => dispatch(increaseMore(100))}
            className="btn-incrementmore"
          >
            Increase 100{" "}
          </button>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
