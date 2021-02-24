import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    var person1 ={
        name: 'saidur rahman',
        age: 22,
        profession: 'study'
    };
    var person2= {
        name: 'Ismail Hossen',
        age: 24,
        profession: 'study'
    };
    var headingStyle ={
        color: 'red',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 50
    }

    const products = [
        {name: 'Photoshop', price: '9.99/mo'},
        {name: 'Illustrator', price: '15.99/mo'},
        {name: 'Acrobet Pro', price: '18.99/mo'},
        {name: 'Premier Pro', price: '14.99/mo'},
        {name: 'InDesign', price: '20.99/mo'},
        {name: 'After Effect', price: '11.99/mo'},
        {name: 'Lightromm', price: '13.99/mo'},
        {name: 'Dreamweaver', price: '19.99/mo'}
    ]
    
    const friends = [
        {name: 'saidur', age: '21'},
        {name: 'ismail', age: '22'},
        {name: 'turag', age: '22.5'},
        {name: 'sohel', age: '22'},
        {name: 'mijan', age: '21'},
        {name: 'Rana', age: '22'}
    ]

    const desktopParts = [
        {partsName: 'Key-Board', price: '650tk'},
        {partsName: 'Mouse', price: '350tk'},
        {partsName: 'Monitor', price: '6000tk'},
        {partsName: 'PC', price: '18000tk'},
        {partsName: 'HeadPhone', price: '1400tk'}
    ]

    return ( 
    <div className="App">
        <header className = "App-header">
            
            <p>My First Paragraph</p>
            <Counter></Counter>
            <h1 style={headingStyle}>{person1.name + " " + person1.age}</h1>
            <h3 style={{color: 'white', backgroundColor: 'blue', padding: 25, borderRadius: 15}}>{person2.name + " " + person2.age}</h3>
            <Persondiv1></Persondiv1>
            <Persondiv1></Persondiv1>
            <Persondiv2></Persondiv2>
            <Persondiv2></Persondiv2>
            <Users></Users>
            <Actors name="Raz Razzak" nayika="Bobita" job="Director"></Actors>
            <Actors name="Elias Kancon" nayika="Mousumi" job="Model"></Actors>
            <Actors name="Kutta Selim" nayika="Nai(Villain)" job="Villain"></Actors>
            <Actors name="Riyaj Muni" nayika="Purnima" job="Actor"></Actors>

        </header>
        <main style={{margin:'50px 50px'}}>
            <div style={{margin:'50px 50px'}}>
                <Products name={products[0].name} price={products[0].price}></Products>
                <Products name={products[1].name} price={products[1].price}></Products>
                <Products name={products[2].name} price={products[2].price}></Products>
                <Products name={products[3].name} price={products[3].price}></Products>
                <Products name={products[4].name} price={products[4].price}></Products>
                <Products name={products[5].name} price={products[5].price}></Products>
                <Products name={products[6].name} price={products[6].price}></Products>
                <Products name={products[7].name} price={products[7].price}></Products>
            </div>
            <div style={{margin: '50px 50px'}}>
                {
                    friends.map(friend => <MyFriends name={friend.name} age={friend.age}></MyFriends>)
                }
            </div>

            <div style={{margin: '50px 60px'}}>
                <div>
                    {
                        desktopParts.map(part => <AllPartsList partsName={part.partsName} price={part.price}></AllPartsList>)
                    }
                </div>
            </div>
        </main>
    </div>
    );
}

// Inline Style in Function
function Persondiv1(){
    return (
    <div style={{border: "2px solid yellow", padding: "10px 40px", borderRadius: "10px", margin: "20px"}}>
        <h1>Name: Shakib Al Hasan</h1>
        <h3>Excelent All Rounder</h3>
    </div>
    );
    
}

// Internal Style in Function 
function Persondiv2(){
    const div2Style = {
        color: "red",
        border: "2px solid red",
        padding: "10px 40px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: 'yellow'
    }
    return (
        <div style={div2Style}>
            <h1>Name: Mushfikur Rahim</h1>
            <h3>World Class WicketKeeper</h3>
        </div>
    )
}

// lost of cards
function Products(props){
    const productsStyle={
        color: 'gray',
        backgroundColor: 'lightgray',
        width: '250px',
        height: '250px',
        border: '1px solid gray',
        borderRadius: '6px',
        float: 'left',
        margin: '10px'
    }
    return(
        <div style={productsStyle}>
            <h5>{props.name}</h5>
            <h4>{props.price}</h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsa?</h6>
            <button>Buy Now</button>
        </div>
    )
}

// friends section
function MyFriends(props){
    const friendsStyle={
        color: 'lime',
        padding: '20px 15px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
        float: 'left',
        width: '200px'
    }
    return(
        <div style={friendsStyle}>
            <h2>Name: {props.name}</h2>
            <h4>Age: {props.age}</h4>
        </div>
    )
}

// Desktop Parts
function AllPartsList(props){
    const partsStyle ={
        color: 'green',
        backgroundColor: 'gray',
        width: '200px',
        padding: '20px 10px',
        margin: '15px',
        float: 'left',
        border: '1px solid purple',
        borderRadius: '6px'
    }
    return(
        <div style={partsStyle}>
            <h3>PartsName: {props.partsName}</h3>
            <h5>Price: {props.price}</h5>
        </div>
    )
}

// State
function Counter(){
    const [count, setCount] = useState(10);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
    )
}

// Use of Api
function Users(){
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div>
            <h3>Dynamic User: {users.length}</h3>
            <ul>
                {
                    users.map(user => <li>{user.name}  = ({user.email}) = ({user.phone})</li>)
                }
            </ul>
        </div>
    )
}

// Dynamic Data
function Actors(props){
    const acotrsStyle ={
        color: 'lime',
        backgroundColor: 'gray',
        margin: '10px',
        border: '2px solid yellow',
        borderRadius: '10px',
        padding: '20px 30px',
        width: '60%'
    }
    return (
        <div style={acotrsStyle}>
            <h1>Nayok: {props.name}</h1>
            <p style={{color: 'goldenrod'}}>Hero of: {props.nayika}</p>
            <h5>Job Title: <span style={{color: 'purple'}}>{props.job}</span></h5>
        </div>
    )
}

export default App;