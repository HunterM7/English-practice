import { useCallback, useState } from 'react';
import { InputArea } from '@components/input-area/input-area';
import { Button } from '@components/button/button';
import './trainer-page.scss';

export function TrainerPage() {
  const options = ['I', 'climbing', 'we', 'he', 'walking', 'like', 'watching', 'work', 'bathing'];
  const [choosedOptions, setChoosedOptions] = useState<string[]>([]);

  const chooseOption = useCallback((option: string) => {
    setChoosedOptions((prev) => [...prev, option]);
  }, [])

  const removeOption = useCallback(() => {
    setChoosedOptions((prev) => prev.slice(0, prev.length - 1));
  }, [])

  return (
    <div className='trainer-page'>
      <p className='trainer-page__title'>Я люблю гулять</p>
      <InputArea className='trainer-page__input-area'>
        {choosedOptions.map((option) => (
          <Button key={option}>{option}</Button>
        ))}
      </InputArea>
      <Button className='trainer-page__clear-button' color='red' onClick={removeOption}>
        удалить последнее слово
      </Button>
      <div className='trainer-page__operators'>
        {options.map((option) => (
          <Button
            key={option}
            className='trainer-page__operator'
            disabled={choosedOptions.includes(option)}
            onClick={() => chooseOption(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}