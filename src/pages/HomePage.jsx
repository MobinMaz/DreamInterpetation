import React, { useState } from "react";
import Background from "../components/Background";
import Welcome from "../components/Welcome";
import DreamInterprets from "../templates/DreamInterprets";
import DreamBar from "../templates/DreamBar";
import useDreamInterprets from "../hooks/dream";
const HomePage = () => {
    const [dream, setDream] = useState("");
    const { isLoading, dreamInterprets, addDreamInterpret } = useDreamInterprets({ resetDream: () => setDream("") });
    return (
        <>
            <Background />
            <Welcome />
            <main className="w-[600px] mr-12 xl:w-[500px] lg:w-[350px] md:mx-auto">
                {<DreamInterprets isVisible={!!dreamInterprets.length} list={dreamInterprets} />}
                <DreamBar 
                    dream={dream}
                    isLoading={isLoading} 
                    onChange={({ target }) => setDream(target.value)} 
                    onAdd={() => addDreamInterpret(dream)}
                />
            </main>
        </>
    );
};
export default HomePage;