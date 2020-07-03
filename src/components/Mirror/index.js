import React from 'react';

import './styles.css';

import { useCount } from '../../context/Count';

export default function Mirror() {
    const { count } = useCount();

    return (
        <div className="mirror">
            <span>
                <b>Mirror: </b>
                {count}
            </span>
        </div>
    );
}