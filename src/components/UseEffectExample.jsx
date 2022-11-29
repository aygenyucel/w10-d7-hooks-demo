import { useEffect, useState } from "react";
//useEffect takes care of the lifecycle features in a functional component

//the rules of hooks are always the same!
// 1) use useEffect just in react functional component!
// 2) use useEffect just at the top level!

const UseEffectExample = () => {
  // useEffect can mimic different class lifecycle methods:
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount
  // useEffect(first arg: what you want to do, second arg: dependecy list)

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.log("this component just mounted!");
  }, [counter]);

  //WHAT IS THE DEPENDENCIES ARRAY?
  //the deps array is an array of values: whenever even ONE of those values
  //change, the callback will be CALLED AGAIN

  //if I declare nothing like [], it executes just once(it works like componentDidMount)
  return (
    <div>
      <h3 onClick={() => setCounter(counter + 1)}>useEffect example!</h3>
      <p>{counter}</p>
    </div>
  );
};

export default UseEffectExample;
