import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { Children } from 'react';

 import Header from './header';
  import QuizPage from './quiz/[id]/page';

export default function Page() {
    return (
      <>
        <Header>
            <h1>QUIZZES</h1>
            <ul>
              <li><Link href="/quiz/1">Quiz 1</Link></li>
              <li><Link href="/quiz/2">Quiz 2</Link></li>
              <li><Link href="/quiz/3">Quiz 3</Link></li>                    
        </ul>
        </Header>
      </>
  )
   
  
}
