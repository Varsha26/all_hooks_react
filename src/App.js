import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import ChildComponent from "./ChildComponent";
import Counter from "./Counter";
import { useMemo } from "react";
import UseContextHook from "./UseContext";

export default function App() {
  const ThemeContext = React.createContext();
  const [theme, setTheme] = useState("");
  const [value, setValue] = useState("");
  const focusTextArea = useRef();
  const [product, setProduct] = useState([]);
  const [userInput, setUserInput] = useState("");

  const squareNum = useMemo(() => squareNum2(userInput), [userInput]);

  //useMemo Hook
  const squareRoot = (number) => {
    return number * number;
  };

  //useState Hook
  const getValue = (value) => {
    alert("hello");
    setValue(value);
  };

  const fetchProduct = async () => {
    const resp = await fetch("https://dummyjson.com/products/search?q=phone");

    const data = await resp.json();
    setProduct(data.products);
  };

  //useeffect usage
  useEffect(() => {
    fetchProduct();
  }, []);

  //useRef Hook
  const handleFocus = () => {
    focusTextArea.current.value = "Hey I Am here";
    focusTextArea.current.focus();
  };

  //useContexthook
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UseContextHook />
      </ThemeContext.Provider>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ChildComponent fetchValue={getValue} />
      {value}
      <Counter />

      <button onClick={handleFocus}>Please focus Me</button>
      <textarea ref={focusTextArea} />

      {product.length > 0 && (
        <>
          <ul>
            {product
              .filter((item) => item.title.includes("iPhone"))
              .map((item) => {
                return <li>{item.title}</li>;
              })}
          </ul>
        </>
      )}

      <input
        type="text"
        placeholder="Enter number to get squareRoot"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <span>{squareNum}</span>
    </div>
  );
}

function UseContextHook() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function squareNum2(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}
