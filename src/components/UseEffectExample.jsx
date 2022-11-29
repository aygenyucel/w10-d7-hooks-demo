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

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.log("this component just mounted!");
  }, []);

  // useEffect(first arg(mandotary): what you want to do, second arg: dependecy list)
  // WHAT IS THE DEPENDENCIES ARRAY?
  // the deps array is an array of values: whenever even ONE of those values
  // change, the callback will be CALLED AGAIN

  // if I declare nothing like [], it executes just once(it works like componentDidMount)
  // if we don't use anything for dependency even [] like this:
  //   useEffect(() => {
  //     console.log("this component just mounted!");
  //   });
  // it listening everything, behave like componentDidUpdate!!!!

  // but it is not useful, because when we use componentdidupdate in class we also use if condition,
  // here, this can lead infinite loop for exp try this bad exp:
  //   useEffect(() => {
  //     console.log("this component just mounted!");
  //     setCounter(counter+1)
  //   });
  // so whenever even ONE of those values change, the callback will be called AGAIN
  // known this, let's try to list down the most used signatures for useEffect:

  // COMPONENTDIDMOUNT REPLACEMENT:
  useEffect(() => {
    console.log("this is a replacement for componentDidMount!");
  }, []);

  // GENERIC COMPONENTDIDUPDATE REPLACEMENT (not recommended):
  useEffect(() => {
    console.log(
      "this is going to be called at every update, like componentDidUpdate"
    );
  });

  const [name, setName] = useState("Stefano");
  // COMPONENTDIDUPDATE THAT TRIGGERS JUST WHEN 1 STATE PROPERTY CHANGES:
  // this is like componentdidupdate with a condition
  useEffect(() => {
    console.log("name changed");
  }, [name]);

  return (
    <div>
      <h3 onClick={() => setCounter(counter + 1)}>useEffect example!</h3>
      <p>{counter}</p>
      <p onClick={() => setName("Eric")}>{name}</p>
    </div>
  );
};

export default UseEffectExample;
