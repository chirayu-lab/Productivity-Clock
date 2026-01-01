import { motion } from 'motion/react';
import { FocusTimer } from './components/FocusTimer';
import { TaskList } from './components/TaskList';

export default function App() {
  return (
    <div className="dark min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#13131a] to-[#1a1a2e] text-white overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12 pb-8 px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white/90 tracking-tight">FOCUS</h1>
            <p className="text-white/40 mt-2">
              A modern space for clarity and productivity
            </p>
          </div>
        </motion.header>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Timer Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end pt-8"
            >
              <FocusTimer />
            </motion.div>

            {/* Tasks Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8"
            >
              <TaskList />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="fixed bottom-0 left-0 right-0 p-6 text-center text-white/20"
        >
          <p className="text-sm">Think better. Work smarter. Create with purpose.</p>
        </motion.footer>
      </div>
    </div>
  );
}
