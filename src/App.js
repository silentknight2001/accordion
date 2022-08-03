import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./data";
import Loading from './Loading'
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  const [loading, setLoading] = useState(true);
  const fetchData = async() => {
    setLoading(true)
    try {
      const respons = await fetch(data)
      const newData = await respons.json();
      setQuestions(newData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
     
  }
  useEffect(() =>{
    fetchData();
  },[]);

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
