interface props {
  increment: () => void;
  decrement: () => void;
}

const CounterButtons = ({ increment, decrement }: props) => {
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterButtons;
