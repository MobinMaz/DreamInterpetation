import { useState, useRef, useEffect } from "react";
const useTypeWriter = text => {
    const [charIndex, setCharIndex] = useState(0);
    const intervalRef = useRef(null);
    useEffect(() => {
        if (text) {
            intervalRef.current = setInterval(() => {
                setCharIndex(charIndex => charIndex + 1);
            }, 10);
        };
    }, [text]);
    useEffect(() => {
        if (charIndex === text.length) {
            clearInterval(intervalRef.current);
        };
    }, [charIndex]);
    return { typed: text.slice(0, charIndex) };
};
export default useTypeWriter;