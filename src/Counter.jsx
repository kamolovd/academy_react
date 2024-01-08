import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader, decrement, increment, incrementByValue } from "./store/features/counter/counterSlice";


const Counter = () => {
    const counter = useSelector((state) => state.counter.value)
    const loading = useSelector((state) => state.counter.loading)
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    return (
        <>
            <input value={value} onChange={(e) => setValue(e.target.value)} /> <br /> <br />
            <div>
                <button onClick={() => dispatch(incrementByValue(+value))}>Add by value</button>
            </div>
            <button onClick={() => dispatch(increment())}>inc</button>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(decrement())}>dec</button> <br /><br />
            <button onClick={() => dispatch(changeLoader(false))}>False</button>
            <h3>{JSON.stringify(loading)}</h3>
            <button onClick={() => dispatch(changeLoader(true))}>True</button>
        </>
    )
}

export default Counter;