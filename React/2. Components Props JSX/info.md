### Component:
- a component is a reusable, independent piece of UI—basically a function or class that returns JSX (JavaScript + HTML-like syntax).
- Key points:
  - Component names must start with an uppercase letter.
  - JSX must return one parent element (use <></> if needed).
  - You can pass data using props.
  - Components can be nested, reused, and composed.


### Props (short for properties)
- props are a way to pass data from a parent component to a child component.
  - Key Points:
  - Props are read-only.
  - You cannot modify props in the child component.
  - Props can be of any type: string, number, array, object, function, etc.
  - You can also use destructuring for cleaner code:

```jsx
  const ChildComponent = ({ name, age }) => {
  return <p>{name} is {age} years old.</p>;
};
```


### JSX:
- JSX (JavaScript XML) is a syntax extension for JavaScript used in React that lets you write HTML-like code directly within JavaScript.

### XML (eXtensible Markup Language)
- XML is a markup language used to store and transport data in a structured and readable format.