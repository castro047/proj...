import {useState} from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name] = useState("castro")

    return (
    <div>
        <h1>isso sera exibido?</h1>
        {x && <p>Se x For True,Sim!</p>}
        {!x && <p>Agora x é Falso!</p>}
        <h1>if ternario</h1>
        {name === "Joao" ? (
            <div>
                <p>O nome é Joao</p>
                </div>
        ) : (
            <div>
                <p>nome não encontrado!</p>
            </div>
        )}
        </div> 
    );
};

export default ConditionalRender;