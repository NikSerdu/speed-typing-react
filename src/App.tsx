import "./App.css";
import Result from "./components/Result/Result";
import SmallDevice from "./components/SmallDevice/SmallDevice";
import Start from "./components/Start/Start";
import Test from "./components/Test/Test";

import { useTyping } from "./hooks/useTyping";

function App() {
  const { isFinished, isStarted, isSmallDevice } = useTyping();

  if (isSmallDevice) {
    return <SmallDevice />;
  }

  if (isFinished) {
    return <Result />;
  }

  if (!isStarted) {
    return <Start />;
  }

  return <Test />;
}

export default App;
