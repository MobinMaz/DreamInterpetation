import { useImmer } from "use-immer";
import { interpretDream } from "../services/dream";
const useDreamInterprets= ({ resetDream }) => {
    const [dreamInterprets, setDreamInterprets] = useImmer([]);
    const addDreamInterpret = async dream => {
        setDreamInterprets(dreamInterprets => { dreamInterprets.push({ dream, isLoading: true, error: "", interpret: null }) });
        const { data, error } = await interpretDream(dream);
        if (data) {
            setDreamInterprets(dreamInterprets => { 
                const dreamInterpret = dreamInterprets.at(-1);
                dreamInterpret.isLoading = false;
                dreamInterpret.interpret = data; 
                resetDream();
            });
        } else {
            setDreamInterprets(dreamInterprets => { 
                const dreamInterpret = dreamInterprets.at(-1);
                dreamInterpret.isLoading = false;
                dreamInterpret.error = error;
            }); 
        };
    };
    const { isLoading } = dreamInterprets.at(-1) || {};
    return { isLoading, dreamInterprets, addDreamInterpret };
};
export default useDreamInterprets;