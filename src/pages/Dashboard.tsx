export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface shadow-cal-sm px-6 py-4">
        <h1 className="text-2xl font-bold text-text-primary">Cal Fit</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* Avatar & Streak Section */}
        <div className="cal-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-xp-purple rounded-full flex items-center justify-center text-3xl">
                💪
              </div>
              <div>
                <h2 className="text-xl font-bold">Level 1</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-32 h-2 bg-task-incomplete rounded-full overflow-hidden">
                    <div className="h-full bg-xp-purple" style={{ width: '30%' }} />
                  </div>
                  <span className="text-sm text-text-secondary">30/100 XP</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-streak-orange text-2xl">
                🔥 <span className="ml-2 font-bold">0</span>
              </div>
              <p className="text-xs text-text-secondary mt-1">Day Streak</p>
            </div>
          </div>
        </div>

        {/* Date Selector */}
        <div className="cal-card">
          <div className="flex items-center justify-between">
            <button className="text-text-secondary">←</button>
            <h3 className="font-semibold">Today, Jan 17</h3>
            <button className="text-text-secondary">→</button>
          </div>
        </div>

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Calories Task */}
          <div className="cal-card">
            <h3 className="font-semibold mb-4">🍎 Calories</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90" width="128" height="128">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#E5E5E5"
                    strokeWidth="8"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="8"
                    strokeDasharray="351.86"
                    strokeDashoffset="263.9"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">0</span>
                  <span className="text-xs text-text-secondary">/ 2000</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 cal-button-secondary text-sm py-2">
              Log Food
            </button>
          </div>

          {/* Workout Task */}
          <div className="cal-card">
            <h3 className="font-semibold mb-4">🏋️ Workout</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Push-ups</span>
                <input 
                  type="number" 
                  placeholder="0"
                  className="w-20 cal-input py-2 text-center text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Squats</span>
                <input 
                  type="number" 
                  placeholder="0"
                  className="w-20 cal-input py-2 text-center text-sm"
                />
              </div>
            </div>
            <button className="w-full mt-4 cal-button-secondary text-sm py-2">
              Complete Workout
            </button>
          </div>

          {/* Steps Task */}
          <div className="cal-card">
            <h3 className="font-semibold mb-4">👟 Activity</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90" width="128" height="128">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#E5E5E5"
                    strokeWidth="8"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                    strokeDasharray="351.86"
                    strokeDashoffset="351.86"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">0</span>
                  <span className="text-xs text-text-secondary">/ 10,000</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-text-secondary mt-4">
              Connect fitness tracker to sync steps
            </p>
          </div>

          {/* Water Task */}
          <div className="cal-card">
            <h3 className="font-semibold mb-4">💧 Water</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">0 ml / 2000 ml</span>
                <span className="text-sm font-semibold">0%</span>
              </div>
              <div className="w-full h-3 bg-task-incomplete rounded-full overflow-hidden">
                <div className="h-full bg-water" style={{ width: '0%' }} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button className="cal-button-secondary text-xs py-2">250ml</button>
              <button className="cal-button-secondary text-xs py-2">500ml</button>
              <button className="cal-button-secondary text-xs py-2">1L</button>
            </div>
          </div>
        </div>

        {/* All-or-Nothing Notice */}
        <div className="cal-card bg-streak-orange/10 border-2 border-streak-orange">
          <p className="text-sm text-center">
            ⚠️ Complete <strong>all 4 tasks</strong> today to earn 40 points and maintain your streak!
          </p>
        </div>
      </div>
    </div>
  )
}
