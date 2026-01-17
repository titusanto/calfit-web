import { useNavigate } from 'react-router-dom'

export function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        <div className="text-6xl mb-6">💪</div>
        <h1 className="text-5xl font-bold text-text-primary text-center mb-4">
          Cal Fit
        </h1>
        <p className="text-lg text-text-secondary text-center max-w-sm">
          Gamified health tracking that makes fitness feel like an epic adventure
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="w-full max-w-md mb-12 space-y-4">
        <div className="flex items-center">
          <span className="text-3xl mr-3">🔥</span>
          <p className="text-base text-text-primary">
            Build streaks, level up your avatar
          </p>
        </div>
        
        <div className="flex items-center">
          <span className="text-3xl mr-3">📸</span>
          <p className="text-base text-text-primary">
            Scan food with AI, track calories
          </p>
        </div>
        
        <div className="flex items-center">
          <span className="text-3xl mr-3">👥</span>
          <p className="text-base text-text-primary">
            Compete with friends, stay motivated
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="w-full max-w-md space-y-3">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full cal-button-primary"
        >
          Get Started
        </button>
        
        <button
          onClick={() => alert('Login coming soon!')}
          className="w-full cal-button-secondary"
        >
          Already have an account? Sign In
        </button>
      </div>
    </div>
  )
}
