import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function Incdeccount() {
    const [count, setCount] = useState(0);

    const inCount = () => {
        setCount(count + 1);
    }

    const deCount = () => {
        setCount(() => {
            if (count > 0) {
                return count - 1;
            }

            window.alert('Count is already 0');

            return 0;
        });
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{count}</h1>
                    <div className="button_div">
                        <Tooltip title="Increment">
                            <Button style={{ border: '1px solid #1aa260', padding: '8px 40px' }} onClick={inCount} className="greenBtn btn"><AddCircleIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Decrement">
                            <Button style={{ marginLeft: '50px', border: '1px solid #DB4437', padding: '8px 40px' }} onClick={deCount} className="redBtn btn"><RemoveCircleIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}