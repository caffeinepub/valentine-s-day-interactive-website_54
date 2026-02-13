import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingBalloons from '@/components/FloatingBalloons';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const noMessages = [
    "Are you sure?",
    "Don't you love me?",
    "Please baby",
    "No, this is not happening",
    "This is not happening",
    "You have to say yes",
    "Come on, it's Valentine's!"
  ];

  const handleNoClick = () => {
    // Move the button to a random position
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoClickCount((prev) => (prev + 1) % noMessages.length);
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingBalloons />
        <div className="text-center z-10 animate-in fade-in zoom-in duration-700">
          <div className="mb-8 flex justify-center">
            <Heart className="w-32 h-32 text-valentine-red fill-valentine-red animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-valentine-red mb-6 font-romantic">
            Yay! I knew it ❤️
          </h1>
          <p className="text-2xl md:text-3xl text-valentine-pink font-medium">
            You've made me the happiest! 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingBalloons />
      
      <div className="text-center z-10 px-4 max-w-2xl mx-auto">
        <div className="mb-12 flex justify-center">
          <Heart className="w-24 h-24 md:w-32 md:h-32 text-valentine-red fill-valentine-red animate-heartbeat" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-valentine-dark mb-8 font-romantic leading-tight">
          Dear Nitin,
          <br />
          <span className="text-valentine-red">will you be my Valentine?</span>
        </h1>

        {noClickCount > 0 && (
          <p className="text-2xl md:text-3xl text-valentine-pink font-medium mb-8 animate-in fade-in slide-in-from-top duration-500">
            {noMessages[noClickCount - 1]}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative">
          <Button
            onClick={handleYesClick}
            size="lg"
            className="text-2xl md:text-3xl px-12 py-8 h-auto bg-valentine-red hover:bg-valentine-red-dark text-white font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-valentine-glow"
          >
            Yes! 💕
          </Button>

          <Button
            onClick={handleNoClick}
            onMouseEnter={handleNoClick}
            size="lg"
            variant="outline"
            className="text-2xl md:text-3xl px-12 py-8 h-auto border-4 border-valentine-pink text-valentine-pink hover:bg-valentine-pink/10 font-bold rounded-full shadow-xl transition-all duration-300"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            No
          </Button>
        </div>
      </div>

      <footer className="absolute bottom-4 left-0 right-0 text-center text-valentine-muted text-sm z-10">
        <p>
          © 2025. Built with <Heart className="inline w-4 h-4 fill-valentine-red text-valentine-red" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-valentine-pink hover:text-valentine-red transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
