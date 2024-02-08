import React from 'react';
import './App.css'

const questions = [
  {
    title: ' Как пишится CO2 ?',
    variants: ['оксид углерода 6', 'цэ о два', 'оксид углерода 4'],
    correct: 2,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
    return (
        <div className='result'>
            <img src="https://yt3.googleusercontent.com/UGnZwQcSeg1K28KjtJSL6FOy5ZJeV3_B3MxURWdYxGUjV3Bk0HnB3XdArW1vvtWzBs1MfCNY=s900-c-k-c0x00ffffff-no-rj"/>
            <h2>Вы отгадали {correct} ответ из {questions.length} </h2>
            <a href="">
                <button>попробовать снова</button>
            </a>
        </div>
    );
}
function Game({step, question, onClickVariant}) {
    const progress = Math.round(step / questions.length * 100);
    return (
        <>
            <div className='progress'>
                <div style={{ width: `${progress}%` }} className='progress__inner'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                 question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                 ))}
            </ul>
        </>
    );
}
function App() {
    const [step, SetStep] = React.useState(0);
    const [correct, SetCorrect] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => 
    {
        SetStep(step + 1);
        if (question.correct === index){
            SetCorrect(correct + 1);
        }
     }

     return (
        <div className='App'>
            {
                step !== questions.length ?
                (<Game step={step} question={question} onClickVariant={onClickVariant}/>):
                (<Result correct={correct}/>)
            }
        </div>
     );
}

export default App;