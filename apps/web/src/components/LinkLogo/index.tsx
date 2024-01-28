import { useMemo } from 'react';
import { clsx } from 'clsx';

type LinkLogoProps = { src?: 'vite' | 'react' };

export default function LinkLogo({ src }: LinkLogoProps) {
  const logo = useMemo(() => {
    if (src === 'vite') {
      return '/static/img/vite.svg';
    }
    if (src === 'react') {
      return '/static/img/react.svg';
    }

    return '/static/img/link-broken.svg';
  }, [src]);

  const href = useMemo(() => {
    if (src === 'vite') {
      return 'https://vitejs.dev';
    }
    if (src === 'react') {
      return 'https://react.dev';
    }

    return 'https://github.com/jagcruz/pnpm-monorepo-boilerplate';
  }, [src]);

  const alt = useMemo(() => {
    if (src === 'vite') {
      return 'Vite logo';
    }
    if (src === 'react') {
      return 'React logo';
    }

    return 'Link broken';
  }, [src]);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        className={clsx('h-36 p-6 transition-[filter] duration-300 will-change-[filter]', {
          'hover:drop-shadow-[0_0_2rem_#bef264aa]': src !== 'vite' && src !== 'react',
          'hover:drop-shadow-[0_0_2rem_#646cffaa]': src === 'vite',
          'hover:drop-shadow-[0_0_2rem_#61dafbaa] animate-spin animate-duration-[20s] animate-ease-linear':
            src === 'react'
        })}
        src={logo}
        alt={alt}
      />
    </a>
  );
}
