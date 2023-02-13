import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";
import currencies from "./Currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <>
      <Header title="currency converter" />
      <Form result={result} calculateResult={calculateResult} />
      <Footer title="exchange rate from 13.02.2023." />
    </>
  );
}

export default App;
