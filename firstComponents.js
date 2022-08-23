import MyComponent from "./MyComponent";

const FirstComponents = () =>  {
    return (
        <div>
            {/*algum coentario*/}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponents;