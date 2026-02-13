import { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  x: number;
  delay: number;
  duration: number;
  image: string;
  size: number;
}

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const balloonImages = [
    '/assets/generated/pink-heart-balloon-transparent.dim_100x120.png',
    '/assets/generated/red-heart-balloon-transparent.dim_100x120.png',
    '/assets/generated/white-heart-balloon-transparent.dim_100x120.png'
  ];

  useEffect(() => {
    const newBalloons: Balloon[] = [];
    for (let i = 0; i < 15; i++) {
      newBalloons.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        image: balloonImages[Math.floor(Math.random() * balloonImages.length)],
        size: 60 + Math.random() * 40
      });
    }
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-float-up opacity-70"
          style={{
            left: `${balloon.x}%`,
            bottom: '-120px',
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`
          }}
        >
          <img
            src={balloon.image}
            alt="Heart balloon"
            className="w-full h-full object-contain animate-sway"
            style={{
              animationDelay: `${balloon.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        </div>
      ))}
      
      {/* Decorative hearts scattered */}
      <div className="absolute top-10 left-10 opacity-20 animate-pulse">
        <img
          src="/assets/generated/decorative-hearts-transparent.dim_200x200.png"
          alt="Decorative hearts"
          className="w-32 h-32"
        />
      </div>
      <div className="absolute top-20 right-20 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <img
          src="/assets/generated/decorative-hearts-transparent.dim_200x200.png"
          alt="Decorative hearts"
          className="w-40 h-40"
        />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <img
          src="/assets/generated/decorative-hearts-transparent.dim_200x200.png"
          alt="Decorative hearts"
          className="w-24 h-24"
        />
      </div>
    </div>
  );
}
