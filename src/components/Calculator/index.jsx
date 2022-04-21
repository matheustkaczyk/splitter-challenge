import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import iconDollar from '../../images/icon-dollar.svg';
import iconPerson from '../../images/icon-person.svg';

export const Calculator = () => {
  const [billInput, setBillInput] = useState(0.00);
  const [peopleInput, setPeopleInput] = useState(1);
  const [percentageInput, setPercentageInput] = useState(0.00);
  const [resultTotal, setResultTotal] = useState(0.00);
  const [resultBill, setResultBill] = useState(0.00);

  const handleBillInput = (e) => {
    setBillInput(e.target.value);
  }

  const handlePeopleInput = (e) => {
    if (e.target.value === '') {
      setPeopleInput(1);
      return false;
    };

    setPeopleInput(e.target.value);
  }

  const handleClick = (value) => {
    setPercentageInput(value);
  }

  const handleReset = () => {
    setBillInput(0);
    setPeopleInput(1);
    setPercentageInput(0);
    setResultTotal(0);
    setResultBill(0);
  }

  useEffect(() => {
    const bill = parseFloat(billInput);
    const people = parseInt(peopleInput);
    const percentage = parseFloat(percentageInput);
    const result = ((bill / people) * percentage);
    setResultTotal((bill / people) + result);
    setResultBill(result);
  }, [billInput, peopleInput, percentageInput]);

  return(
    <div className="calculator">
      <div className="calculator-inner-wrapper">
        <div className="bill">
          Bill
          <div className="bill-input-wrapper">
            <img src={iconDollar} />
            <Input type="number" handleChange={handleBillInput}  />
          </div>
        </div>
        <div className="tip">
          Select Tip %
          <div>
            <Button classN="btn" type="button" handleClick={handleClick} text='5%' value={0.05} />
            <Button classN="btn" type="button" handleClick={handleClick} text='10%' value={0.10} />
            <Button classN="btn" type="button" handleClick={handleClick} text='15%' value={0.15} />
            <Button classN="btn" type="button" handleClick={handleClick} text='25%' value={0.25} />
            <Button classN="btn" type="button" handleClick={handleClick} text='50%' value={0.50} />
          </div>
        </div>
        <div className="people">
          Number of people
          <div className="person-input-wrapper">
            <img src={iconPerson} />
            <Input type="text" handleChange={handlePeopleInput} />
          </div>
        </div>
      </div>
      <div className="results">
        <div className="results-1">
          <div className="word-wrap">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <h2>
            ${resultBill.toFixed(2)}
          </h2>
        </div>
        <div className="results-2">
          <div className="word-wrap">
            <p>Total Amount</p>
            <span>/ person</span>
          </div>
          <h2>
            ${resultTotal.toFixed(2)}
          </h2>
        </div>
        <Button type="button" classN="btn-reset" handleClick={handleReset} text="RESET" />
      </div>
    </div>
  )
}