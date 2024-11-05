import { Link } from 'react-router-dom';
import './lessons-page.scss';

export function LessonsPage() {
  return (
    <>
      <h2 className='lessons-page__title'>Уроки</h2>
      <div className='lessons-page__list'>
        <Link to='present-simple'>Present simple</Link>
        <Link to='present-continuous'>Present continuous</Link>
        <Link to='present-perfect'>Present perfect</Link>
      </div>
    </>
  )
}