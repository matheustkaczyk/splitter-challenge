import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

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
      <div>
        Bill
        <Input type="number" handleChange={handleBillInput}  />
      </div>
      <div>
        Select Tip %
        <Button type="button" handleClick={handleClick} text='5%' value={0.05} />
        <Button type="button" handleClick={handleClick} text='10%' value={0.10} />
        <Button type="button" handleClick={handleClick} text='15%' value={0.15} />
        <Button type="button" handleClick={handleClick} text='25%' value={0.25} />
        <Button type="button" handleClick={handleClick} text='50%' value={0.50} />
      </div>
      <div>
        Number of people
        <Input type="number" handleChange={handlePeopleInput} />
      </div>
      <div>
        <div>
          <p>Tip Amount <span>/ person</span>{resultBill.toFixed(2)}</p>
        </div>
        <div>
          <p>Total <span>/ person</span>{resultTotal.toFixed(2)}</p>
        </div>
      </div>
      <Button type="button" handleClick={handleReset} text="RESET" />
    </div>
  )
}