import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Button } from "@components/button/button";
import { InputArea } from "@components/input-area/input-area";
import { Exercise } from "@api/index";
import './trainer.scss';

interface Props {
  exercise: Exercise;
}

enum ExerciseStep { Solution, Success, Error };
 
export function Trainer(props: PropsWithChildren<Props>) {
  const { exercise } = props;
  const [choosedOptions, setChoosedOptions] = useState<string[]>([]);
  const [step, setStep] = useState<ExerciseStep>(ExerciseStep.Solution);

  const chooseOption = useCallback((option: string) => {
    if (step != ExerciseStep.Solution) {
      return;
    }
    setChoosedOptions((prev) => [...prev, option]);
  }, [step])

  const removeOption = useCallback(() => {
    setChoosedOptions((prev) => prev.slice(0, prev.length - 1));
  }, [])

  useEffect(() => {
    if (choosedOptions.length == exercise.totalOptionsLength) {
      if (choosedOptions.join(' ') === exercise.answer) {
        setStep(ExerciseStep.Success);
      } else {
        setStep(ExerciseStep.Error);
      }
    } else {
      setStep(ExerciseStep.Solution);
    }
  }, [choosedOptions, exercise.answer, exercise.totalOptionsLength])

  return (
    <div className='trainer'>
      <p className='trainer__title'>{exercise.question}</p>
      <InputArea
        className='trainer__input-area'
        state={
          step == ExerciseStep.Success && 'success' ||
          step == ExerciseStep.Error && 'error' ||
          'default'
        }
      >
        {choosedOptions.map((option) => (
          <Button key={option}>{option}</Button>
        ))}
      </InputArea>
      <Button className='trainer__clear-button' color='red' onClick={removeOption}>
        удалить последнее слово
      </Button>
      <div className='trainer__operators'>
        {exercise.options.map((option) => (
          <Button
            key={option}
            className='trainer__operator'
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