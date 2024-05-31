import React from "react";
import DreamInterpret from "../components/DreamInterpret";
const DreamInterprets = ({ isVisible, list }) => (
    <section className={`relative flex flex-col gap-4 min-h-[300px] mt-20 mb-12 px-10 py-16 rounded-2xl bg-purple-100
        ${isVisible ? "visible" : "invisible"}`}>
        {list.map((interpret, index) => <DreamInterpret key={index} {...interpret} />)}
    </section>
);
export default DreamInterprets; 