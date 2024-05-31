import api from "../configs/axios";
const interpretDream = async content => {
    try {
        const response = await api.post("/interpret/", { content });
        return { data: response.data?.dreamInterpretation };
    } catch({ response }) {
        return { error: response?.data?.content || "مشکلی در تعبیر خواب پیش امده است." };
    };    
};
export { interpretDream };