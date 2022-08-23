const TemplateExpressions = () => {

    const name = "Castro"
    const date = {
        age: '31',
        job: "programer"
};

    return (
        <div> 
            <h1> olá {name}, tudo bem?</h1>
            <p>voce atua como: {date.job}</p>
        </div>
    )

}

export default TemplateExpressions