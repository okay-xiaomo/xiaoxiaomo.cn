import { useState } from 'react';

type DecorationType =
  | 'star'
  | 'heart'
  | 'circle'
  | 'check'
  | 'diamond'
  | 'circle-pulse'
  | 'star-flash'
  | 'circle-pulse-2';

type AnimationType = 'float-up' | 'spin-slow';

interface Decoration {
  id: number;
  type: DecorationType;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: number;
  opacity: number;
  delay: number;
  animation: AnimationType;
}

export const DecorationElements = () => {
  const [decorations] = useState<Decoration[]>(() => {
    const types: DecorationType[] = [
      'star',
      'heart',
      'circle',
      'check',
      'diamond',
      'circle-pulse',
      'star-flash',
      'circle-pulse-2',
    ];

    const decorations: Decoration[] = [];
    let id = 0;

    // 顶部 - 4个元素 (x轴均分，y轴随机)
    for (let i = 0; i < 4; i++) {
      decorations.push({
        id: id++,
        type: types[Math.floor(Math.random() * types.length)],
        position: {
          top: `${Math.random() * 90 + 30}px`,
          left: `${(i + 1) * (100 / 5)}%`,
        },
        size: Math.floor(Math.random() * 15) + 40,
        opacity: 0.4,
        delay: Math.random() * 1.5,
        animation: Math.random() > 0.5 ? 'float-up' : 'spin-slow',
      });
    }

    // 底部 - 4个元素 (x轴均分，y轴随机)
    for (let i = 0; i < 4; i++) {
      decorations.push({
        id: id++,
        type: types[Math.floor(Math.random() * types.length)],
        position: {
          bottom: `${Math.random() * 90 + 30}px`,
          left: `${(i + 1) * (100 / 5)}%`,
        },
        size: Math.floor(Math.random() * 15) + 40,
        opacity: 0.4,
        delay: Math.random() * 1.5,
        animation: Math.random() > 0.5 ? 'float-up' : 'spin-slow',
      });
    }

    // 左侧 - 4个元素 (y轴均分，x轴随机)
    for (let i = 0; i < 4; i++) {
      decorations.push({
        id: id++,
        type: types[Math.floor(Math.random() * types.length)],
        position: {
          left: `${Math.random() * 90 + 30}px`,
          top: `${(i + 1) * (100 / 5)}%`,
        },
        size: Math.floor(Math.random() * 15) + 40,
        opacity: 0.4,
        delay: Math.random() * 1.5,
        animation: Math.random() > 0.5 ? 'float-up' : 'spin-slow',
      });
    }

    // 右侧 - 4个元素 (y轴均分，x轴随机)
    for (let i = 0; i < 4; i++) {
      decorations.push({
        id: id++,
        type: types[Math.floor(Math.random() * types.length)],
        position: {
          right: `${Math.random() * 90 + 30}px`,
          top: `${(i + 1) * (100 / 5)}%`,
        },
        size: Math.floor(Math.random() * 15) + 40,
        opacity: 0.4,
        delay: Math.random() * 1.5,
        animation: Math.random() > 0.5 ? 'float-up' : 'spin-slow',
      });
    }

    return decorations;
  });

  const renderIcon = (type: DecorationType, size: number) => {
    switch (type) {
      case 'star':
      case 'star-flash':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'circle':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="14" cy="14" r="12" />
            <circle cx="14" cy="14" r="8" />
            <circle cx="14" cy="14" r="4" />
          </svg>
        );
      case 'check':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        );
      case 'diamond':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 12-9 9-9-9 9-12z" />
          </svg>
        );
      case 'circle-pulse':
      case 'circle-pulse-2':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      default:
        return null;
    }
  };

  const colors = [
    'text-yellow-300',
    'text-pink-300',
    'text-blue-300',
    'text-green-400',
    'text-cyan-300',
    'text-orange-300',
    'text-purple-300',
    'text-green-300',
  ];

  return (
    <>
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .float-up {
          animation: float-up 3.8s ease-in-out infinite;
        }

        .spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        {decorations.map((decoration) => {
          const color = colors[decoration.id % colors.length];

          return (
            <div
              key={decoration.id}
              className={`absolute ${color} ${decoration.animation}`}
              style={{
                ...decoration.position,
                opacity: decoration.opacity,
                animationDelay: `${decoration.delay}s`,
              }}
            >
              {renderIcon(decoration.type, decoration.size)}
            </div>
          );
        })}
      </div>
    </>
  );
};
