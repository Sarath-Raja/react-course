"use strict";

console.log('App.js is running');
console.log(React);
console.log(ReactDOM);

//JSX - JavaScript XML

var appObj = {
    title: "Indecision App",
    subTitle: "Put your hands in the hands of a computer",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObj.title
    ),
    appObj.subTitle && React.createElement(
        "p",
        null,
        appObj.subTitle
    ),
    React.createElement(
        "p",
        null,
        appObj.options && appObj.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: "Sarath Raja",
    age: 25,
    location: "Bangalore"
};

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
