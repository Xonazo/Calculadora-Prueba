import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })





export default function Home() {

  const [inputValue, setInputValue] = useState('');

  const handleClick = (value) => {
    if(inputValue.length <= 15) {
    setInputValue(inputValue + value);
  }
  };

  const handleClean = () => {
    setInputValue('');
  };

  const handleEvaluate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <>
      <Head>
        <title>Calculadora</title>
      </Head>
      <div className='container'>
      <div className='display'>
        <input type="textfield" value={inputValue} style={{ fontSize: inputValue.length >= 10 ? '30px' : '45px' }} />
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className='operator' onClick={() => handleClick('+')}>+</button>
          <br></br>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className='operator' onClick={() => handleClick('-')}>-</button>
          <br></br>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className='operator' onClick={() => handleClick('*')}>X</button>
          <br></br>
          <button onClick={() => handleClick('0')}>0</button>
          <button className='clean' onClick={handleClean}>C</button>
          <button className='clean' onClick={handleEvaluate}>=</button>
          <button className='operator' onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </>
  );
}