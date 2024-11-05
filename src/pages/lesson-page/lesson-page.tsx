import { useParams } from 'react-router-dom';
import './lesson-page.scss';

export function LessonPage() {
  const { lessonName } = useParams();

  return (
    <div>
      <h2 className='lesson-page__title'>Урок по {lessonName}</h2>
    </div>
  )
}