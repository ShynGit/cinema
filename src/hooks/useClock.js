import { useEffect, useState } from "react";

function formatDate(time) {
    if (!time) return "";

    const hour = `0${time.getHours()}`.slice(-2);
    const minute = `0${time.getMinutes()}`.slice(-2);
    const second = `0${time.getSeconds()}`.slice(-2);

    return `${hour}:${minute}:${second}`;
}

function useClock() {
    const [clock, setClock] = useState("");

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const time = new Date();
            const newTime = formatDate(time);
            setClock(newTime);
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    return clock;
}

export default useClock;
