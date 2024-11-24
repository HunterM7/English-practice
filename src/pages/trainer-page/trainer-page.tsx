import { useLoaderData } from 'react-router-dom';
import { Trainer } from '@components/trainer/trainer';
import { Exercise } from '@api/index';
import './trainer-page.scss';

export function TrainerPage() {
  const { exercises } = useLoaderData() as { exercises: Exercise[] };

  return (
    <div className='trainer-page'>
      <Trainer exercise={exercises[0]}/>
    </div>
  )
}