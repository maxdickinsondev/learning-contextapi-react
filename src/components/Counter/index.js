import React from 'react';

import './styles.css';

import { useCount } from '../../context/Count';

export default function Counter() {
    const { count, setCount } = useCount();

    return (
        <div className="counter">
            <b>Count: </b>
            {count }
            <br />

            <button onClick={() => setCount(count + 1)} >Aumentar</button>
        </div>
    );
}