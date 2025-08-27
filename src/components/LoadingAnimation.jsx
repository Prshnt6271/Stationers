import { useState, useEffect } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-overlay-3d">
      <div className="scene-3d">
        <div className="pencil-3d">
          <div className="pencil-tip-3d"></div>
          <div className="pencil-body-3d"></div>
          <div className="pencil-metal-3d"></div>
          <div className="pencil-eraser-3d"></div>
        </div>
        
        <div className="notebook-3d">
          <div className="notebook-cover-3d"></div>
          <div className="notebook-pages-3d"></div>
        </div>
        
        <div className="ruler-3d">
          <div className="ruler-markings-3d"></div>
        </div>
        
        <div className="scissors-3d">
          <div className="scissors-handle-3d left"></div>
          <div className="scissors-handle-3d right"></div>
          <div className="scissors-blade-3d left"></div>
          <div className="scissors-blade-3d right"></div>
        </div>
        
        <div className="paper-clip-3d"></div>
        <div className="ink-pen-3d"></div>
        <div className="stapler-3d"></div>
      </div>
      
      <div className="loading-content-3d">
        <h2 className="loading-title-3d">Kundkund Stationers</h2>
        <p className="loading-text-3d">Preparing your creative tools...</p>
        
        <div className="progress-container-3d">
          <div className="progress-bar-3d" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="loading-percentage-3d">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingAnimation;