import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleClick = (event) => {
    const value = event.target.innerText;
    if (!isNaN(value)) {
      if (displayValue === '0') {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    } else if (value === '+' || value === '-') {
      setOperator(value);
      setOperand(displayValue);
      setDisplayValue("0");
    } else if (value === '=') {
      if(!operator || !operand) return;
      const result = eval(`${operand} ${operator} ${displayValue}`);
      setDisplayValue(result.toString());
      setOperator(null);
      setOperand(null);
    }
    else if(value === 'ce'){
      setDisplayValue('0');
    } 
  };

  return (
    <>
      <Head>
        <title>Calculadora</title>
      </Head>

      <div className='container'>
        <div className='calculator'>
          <div className='display'>
          <h1>{displayValue}</h1>
          </div>
          <div className='keypad'>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>0</button>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick}>-</button>
            <button onClick={handleClick}>=</button>
            <button onClick={handleClick}>ce</button>


          </div>
        </div>

      </div>


    </>
  )
}
