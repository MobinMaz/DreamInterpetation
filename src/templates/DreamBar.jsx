import React from "react";
const DreamBar = ({ dream, isLoading, onChange, onAdd }) => (
    <section className="relative z-20 mb-12">
        <form className="flex justify-between items-center h-16 rounded-xl bg-gray-300 p-2">
            <textarea 
                className="w-4/5 placeholder:text-purple-light"
                placeholder="خوابت رو توصیف کن ..." 
                value={dream}
                onChange={onChange}
            >
            </textarea>
            <button 
                className="p-2 rounded bg-purple-500 text-white whitespace-nowrap disabled:bg-purple-light 
                    disabled:cursor-not-allowed" 
                disabled={isLoading}
                onClick={onAdd}
            >
                دیدن نتیجه
            </button>
        </form>
    </section>
);
export default DreamBar;