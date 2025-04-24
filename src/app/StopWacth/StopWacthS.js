'use client';
import React, { useState, useRef } from 'react';

const StopWacthS = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
    const intervalRef = useRef(null);

    let updHr = time.hr;
    let updMin = time.min;
    let updSec = time.sec;
    let updMilli = time.milli;

    const start = () => {
        if (intervalRef.current !== null) return; 
        intervalRef.current = setInterval(() => {
            if (updMilli === 100) {
                updMilli = 0;
                updSec++;
            }
            if (updSec === 60) {
                updSec = 0;
                updMin++;
            }
            if (updMin === 60) {
                updMin = 0;
                updHr++;
            }
            updMilli++;
            setTime({ hr: updHr, min: updMin, sec: updSec, milli: updMilli });
        }, 10);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null; 
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg p-10 rounded-md text-center">
                <h1 className="text-5xl font-mono tracking-widest mb-8">
                    {time.hr + ":" + time.min + ":" + time.sec + ":" + time.milli}
                </h1>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={start}
                        className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600"
                    >
                        Start
                    </button>

                    <button
                        onClick={stop}
                        className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600"
                    >
                        Stop
                    </button>

                    <button
                        onClick={reset}
                        className="bg-yellow-400 text-white font-bold py-2 px-6 rounded hover:bg-yellow-500"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWacthS;
