console.log('App.js is running')
console.log(React);
console.log(ReactDOM);

//JSX - JavaScript XML

const appObj = {
    title: "Indecision App",
    subTitle: "Put your hands in the hands of a computer",
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subTitle && <p>{ appObj.subTitle }</p>}
        <p>{(appObj.options && appObj.options.length > 0) ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: "Sarath Raja",
    age: 25,
    location: "Bangalore"
}

function getLocation(location)
{
    if(location)
        return <p>Location: {location}</p>;
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot)