import { useState } from 'react';

import { GithubLogo } from 'phosphor-react';
import { CloseButton } from './CloseButton';

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamentos',
    }
  },
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center mb-4 shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className='flex py-8 gap-2 w-full'>
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className='bg-zinc-800 rounded py-5 w-24 flex-1 flex flex-col items-center gap2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                onClick={() => setFeedbackType(key as FeedbackType)}
                type='button'
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>

            );
          })}
        </div>

      ) : (
        <p>Hello World</p>
      )}

      <footer className='text-xs text-neutral-400 flex items-center gap-2'>
        <GithubLogo size={15} weight="bold" />
        <a className='underline underline-offset-2' href='https://github.com/Barbosa885'>Barbosa885</a>
      </footer>
    </div>
  )
}
