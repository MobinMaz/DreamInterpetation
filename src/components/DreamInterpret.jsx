import React from "react";
import Loader from "./Loader";
import Error from "../components/Error";
import useTypeWriter from "../hooks/type";
const DreamInterpret = ({ dream, isLoading, error, interpret }) => {
    const { typed } = useTypeWriter(interpret || "");
    return (
        <div className="mb-3 border-2 border-solid border-purple-500 rounded p-3">
            {isLoading ? <Loader /> : error ? <Error message={error} /> : (
                <>
                    <span className="inline-block p-4 mb-5 rounded-3xl bg-purple-500 text-white">{dream}</span>
                    <p>{typed}</p>
                </>
            )}
        </div>
    );
};
export default DreamInterpret;