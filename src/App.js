import React from 'react';
import './App.css';

const App = () =>(<PersonList/>)

const PersonList = () => {

  const people = [
    {
      img:22, 
      name:'john', 
      job:'developer',
    },
    {
      img:34, 
      name:'bob', 
      job:'designer',
    },
    {
      img:56, 
      name:'peter', 
      job:'artist',
    },
  ]

  return (<section>
    <Person person={people[0]}/>;
    <Person person={people[1]}>
      You can import a file right in a JavaScript module. This tells webpack to include that file in the bundle.
    </Person>;
    <Person person={people[2]}/>;
  </section>) 
}
  
const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://picsum.photos/id/${img}/200/300`;
  
  return <div className="person">
    <img src={url} alt="" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>
}

export default App;
