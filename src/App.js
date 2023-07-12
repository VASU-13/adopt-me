const Pet = (props) => {
    return React.createElement("div",{},[
        React.createElement("h1",{},props.animal),
        React.createElement("h2",{},props.name),
        React.createElement("h2",{},props.breed),
    ])
    
}
const App = () => {
    return React.createElement("div",
        {},
        React.createElement("h1",{},
        "Adopt Me!"),
        React.createElement(Pet,{
            animal: "Dog",
            name: "Doink",
            breed: "Mixed"
        }),
        React.createElement(Pet,{
            animal: "Dog",
            name: "Doink",
            breed: "Mixed"
        }),
        React.createElement(Pet,{
            animal: "Dog",
            name: "Doink",
            breed: "Mixed"
        })

    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));