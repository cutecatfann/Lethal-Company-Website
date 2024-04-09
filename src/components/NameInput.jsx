/**
 * NameInput.jsx is a React component that simulates a terminal-like interaction for collecting user information.
 * It asks the user for their name, role, and favorite animal in a sequential manner, using a typing effect for the questions.
 * 
 * The component uses React's useState and useEffect hooks for managing state and side effects respectively.
 * It also uses the useNavigate hook from react-router-dom for navigation.
 * 
 * The state variables include:
 * - inputs: an object holding the user's name, role, and favorite animal.
 * - currentInput: a string representing the current question being asked (name, role, or animal).
 * - conversation: a string representing the ongoing conversation in the terminal.
 * 
 * The useEffect hook is used to type out the current question to the user with a typing effect.
 * It does this by appending one character from the current question to the conversation state every 50ms.
 * 
 * The handleEnterPress function is triggered when the user presses the Enter key.
 * It appends the user's input to the conversation and moves on to the next question.
 * If the current question is about the favorite animal, it submits the form.
 * 
 * The handleSubmit function navigates the user to the greeting page.
 * If the user didn't provide a name, it sends a default message.
 * 
 * The handleChange function updates the inputs state with the user's input.
 * 
 * The component returns a div containing the conversation and an input field for the user's input.
 * The input field is only shown if there's a current question.
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// NameInput component
const NameInput = () => {
  // State variables
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    animal: "",
  });
  const [currentInput, setCurrentInput] = useState("name");
  const [conversation, setConversation] = useState("");
  const navigate = useNavigate();

  // These are the qs that will b asked to the user
  useEffect(() => {
    const questions = {
      name: "> Enter your name below:",
      role: "> Enter your role below:",
      animal: "> Enter your favorite animal",
    };

    // Typing effect for the current question
    const currentQuestion = questions[currentInput];
    let typingTimeout;

    // Function to type out the question
    const typeQuestion = (i = 0) => {
      try {
        // Check if the question has been fully typed
        if (i < currentQuestion.length) {
          // Append one character at a time to the conversation
          setConversation((prev) => prev + currentQuestion.charAt(i));
          // Call the function again for the next character
          typingTimeout = setTimeout(() => typeQuestion(i + 1), 50);
        } else {
          // Add a new line after the question is fully typed
          setConversation((prev) => prev + "\n");
        }
      } catch (error) {
        console.error(`Error typing out question: ${error}`);
      }
    };

    typeQuestion();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [currentInput]);

  // Handle Enter key press
  const handleEnterPress = (event) => {
    try {
      if (event.key === "Enter") {
        // Prevent the default Enter key behavior
        event.preventDefault();
        const { name, role, animal } = inputs;
        const nextInput = {
          name: "role",
          role: "animal",
          animal: null,
        };

        // Append the user's input to the conversation
        setConversation((prev) => `${prev}${event.target.value}\n`);

        // Check if the current question is about the favorite animal
        if (currentInput === "animal") {
          // Submit the form
          handleSubmit(name, role, animal);
        } else {
          setCurrentInput(nextInput[currentInput]);
        }
      }
    } catch (error) {
      console.error(`Error handling Enter key press: ${error}`);
    }
  };

  // Handle form submission
  const handleSubmit = (name, role, animal) => {
    try {
      if (name.trim() === "") {
        // if name is blank, send a default message
        navigate("/greeting", {
          state: {
            name: "you're being sent out for not meeting quota",
            role,
            animal,
          },
        });
      } else {
        navigate("/greeting", { state: { name, role, animal } });
      }
    } catch (error) {
      console.error(`Error handling form submission: ${error}`);
    }
  };

  const handleChange = (value) => {
    try {
      // Update the inputs state with the user's input
      setInputs((prev) => ({
        ...prev,
        [currentInput]: value,
      }));
    } catch (error) {
      console.error(`Error handling input change: ${error}`);
    }
  };

  return (
    <div className="NameInput">
      <pre className="ConversationText">{conversation}</pre>
      {currentInput && (
        <>
          <label htmlFor="commandInput">&gt;</label>
          <input
            id="commandInput"
            type="text"
            value={inputs[currentInput]}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleEnterPress}
            autoFocus
          />
        </>
      )}
    </div>
  );
};

export default NameInput;
