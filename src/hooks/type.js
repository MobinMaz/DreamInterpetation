import { useState, useRef, useEffect } from "react";
const useTypeWriter = text => {
    const [charIndex, setCharIndex] = useState(0);
    const [typed, setTyped] = useState("");
    const intervalRef = useRef(null);
    useEffect(() => {
        if (charIndex === text.length) {
            clearInterval(intervalRef.current);
        } else {
            setTyped(text.slice(0, charIndex));
        };
    }, [charIndex]);
    useEffect(() => {
        if (text) {
            intervalRef.current = setInterval(() => {
                setCharIndex(charIndex => charIndex + 1);
            }, 10);
        };
    }, [text]);
    return { typed };
};
export default useTypeWriter;