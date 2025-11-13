import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

const BeforeAfter = ({ beforeImage, afterImage, title }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <ScrollReveal>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h3 className="text-3xl font-serif font-light text-center mb-8 text-gradient">
            {title}
          </h3>
        )}
        <div
          className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-card cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onClick={handleMove}
        >
          {/* After Image (Full) */}
          <img
            src={afterImage}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          
          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
          
          {/* Slider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-6 bg-primary"></div>
                <div className="w-0.5 h-6 bg-primary"></div>
              </div>
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
            After
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default BeforeAfter;
