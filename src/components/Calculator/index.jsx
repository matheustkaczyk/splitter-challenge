import { Button } from '../Button';
import { Input } from '../Input';

export const Calculator = () => {
  const handleClick = () => {}

  return(
    <div className="calculator">
      <div>
        Bill
        <Input />
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