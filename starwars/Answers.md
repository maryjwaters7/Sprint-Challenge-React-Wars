# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library used to greatly improve the speed of dynamic apps. It does this by creating a Virtual DOM and then only rendering updates to the actual DOM when something is changed instead of rerendering the entire DOM every time something changes

1. Describe component state.

"State" is what allows you to create componenets that are dynamic and interactive. State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component.

1. Describe props.

Props make components reusable by giving components the ability to receive data from the parent component in the form of props.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are basically anything that affects something outside of the scope of the current function that's being executed and you sync their effects using the Effect Hook {useEffect} that takes 2 arguments. The first argument is a function and the 2nd argument is a dependency array