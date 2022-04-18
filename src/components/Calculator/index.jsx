import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

export const Calculator = () => {
  const [billInput, setBillInput] = useState(0);
  const [peopleInput, setPeopleInput] = useState(0);
  const [percentageInput, setPercentageInput] = useState(0);
  const [result, setResult] = useState(0);

  const handleBillInput = (e) => {
    setBillInput(e.target.value);
  }

  const handleClick = (value) => {
    setPercentageInput(value);
  }

  useEffect(() => {
    const bill = parseFloat(billInput);
    const people = parseInt(peopleInput);
    const percentage = parseFloat(percentageInput);
    const result = (bill / people) * percentage;
    setResult(result);
  }, [billInput, peopleInput, percentageInput]);

  return(
    <div className="calculator">
      <div>
        Bill
        <Input type="number" handleChange={handleBillInput}  />
      </div>
      <div>
        Select Tip %
        <Button type="button" handleClick={handleClick} text='5%' value={0.5} />
        <Button type="button" handleClick={handleClick} text='10%' value={0.10} />
        <Button type="button" handleClick={handleClick} text='15%' value={0.15} />
        <Button type="button" handleClick={handleClick} text='25%' value={0.25} />
        <Button type="button" handleClick={handleClick} text='50%' value={0.50} />
      </div>
      <div>
        Number of people
        <Input />
      </div>
      <div>

      </div>
    </div>
  )
}