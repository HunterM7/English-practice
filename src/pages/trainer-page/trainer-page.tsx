import { Trainer } from '@components/trainer/trainer';
import { Exercise } from '@api/index';
import './trainer-page.scss';

export function TrainerPage() {
  const exercise: Exercise = {
    question: 'Я люблю гулять',
    options: ['I', 'climbing', 'we', 'he', 'walking', 'like', 'watching', 'work', 'bathing'],
    answer: 'I like walking',
    totalOptionsLength: 3,
  }

  return (
    <div className='trainer-page'>
      <Trainer exercise={exercise}/>
    </div>
  )
}