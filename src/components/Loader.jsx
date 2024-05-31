import React from "react";
import { purple } from "tailwindcss/colors";
import { Comment } from "react-loader-spinner";
const Loader = () => (
    <div className="text-center">
        <Comment backgroundColor={purple[500]} width="50" height="50" />
    </div>
);
export default Loader;