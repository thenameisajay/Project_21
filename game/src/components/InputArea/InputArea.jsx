import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

function InputArea({ setArrowData }) {
  // Add isLoading state
  const [isLoading, setIsLoading] = useState(false);
  const handleKeyDown = (e, refToFocus, setInput) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setInput("");
      if (refToFocus && refToFocus.current) {
        refToFocus.current.focus();
      }
    }
  };

  const navigate = useNavigate();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [submitCount, setSubmitCount] = useState(1); // Add this line

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const handleInput1 = (e) => {
    const value = e.target.value;
    setInput1((prev) => (prev.length < 1 ? value : prev));
    if (value.length !== 0) {
      inputRef2.current.focus();
    }
  };

  const handleInput2 = (e) => {
    const value = e.target.value;
    setInput2((prev) => (prev.length < 1 ? value : prev));
    if (value.length !== 0) {
      inputRef3.current.focus();
    }
  };

  const handleInput3 = (e) => {
    const value = e.target.value;
    setInput3((prev) => (prev.length < 1 ? value : prev));
    if (value.length !== 0) {
      inputRef4.current.focus();
    }
  };

  const handleInput4 = (e) => {
    const value = e.target.value;
    setInput4((prev) => (prev.length < 1 ? value : prev));
  };

  let userPassword = input1 + input2 + input3 + input4;
  userPassword = parseInt(userPassword, 10);

 

  const handleSubmit = async (e) => {
    setArrowData(null); // Every time the data is intialised.
    e.preventDefault(); // prevent the page from refreshing
    setSubmitCount(submitCount + 1); // Increase the submit count
    setIsLoading(true); // Set isLoading to true when the request starts
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/passwordCheck`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: userPassword })
        }
      );

      const data = await response.json();
      
      // Assuming data is a number (-1, 0, or 1)
      setArrowData(data); // Save the response data to state
      setIsLoading(false); // Set isLoading to false even if there is an error
      // Reset inputs to initial state if data is not 0
      if (data !== 0) {
        setInput1("");
        setInput2("");
        setInput3("");
        setInput4("");
        // Also move the focus to the first input field
        inputRef1.current.focus();
        setSubmitCount(submitCount + 1); // Increase the submit count only if data is not 0
      }
      if (data === 0) {
        navigate("/scoreholder", { state: { tries: submitCount } });
        setSubmitCount(1); // Reset the no.of tries
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                ref={inputRef1}
                type="number"
                pattern="\d*"
                maxLength={1}
                className="form-control"
                placeholder=" "
                value={input1} // Add this line
                onChange={handleInput1}
                onKeyDown={(e) => handleKeyDown(e, null, setInput1)}
              />
            </div>
            <div className="col">
              <input
                ref={inputRef2}
                type="number"
                pattern="\d*"
                maxLength={1}
                className="form-control"
                placeholder=" "
                value={input2} // And this one
                onChange={handleInput2}
                onKeyDown={(e) => handleKeyDown(e, inputRef1, setInput2)}
              />
            </div>
            <div className="col">
              <input
                ref={inputRef3}
                type="number"
                pattern="\d*"
                maxLength={1}
                className="form-control"
                placeholder=" "
                value={input3} // And this one
                onChange={handleInput3}
                onKeyDown={(e) => handleKeyDown(e, inputRef2, setInput3)}
              />
            </div>
            <div className="col">
              <input
                ref={inputRef4}
                type="number"
                pattern="\d*"
                maxLength={1}
                className="form-control"
                placeholder=" "
                value={input4} // And this one
                onChange={handleInput4}
                onKeyDown={(e) => handleKeyDown(e, inputRef3, setInput4)}
              />
            </div>
          </div>
          <button
            className={`button-19 unlock ${isLoading ? "button-disabled" : ""}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Checking.." : "Unlock"}
          </button>
        </form>
      </div>
    </>
  );
}

export default InputArea;
