import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { QuickTask } from './QuickTask';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Review morning emails', completed: false },
    { id: '2', text: 'Deep work session', completed: false },
    { id: '3', text: 'Team standup', completed: true },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: newTaskText.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-white/90 mb-6">Quick Tasks</h2>
      
      <div className="space-y-1">
        <AnimatePresence>
          {tasks.map((task) => (
            <QuickTask
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Add Task Input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus-within:border-white/20 transition-colors"
      >
        <Plus className="w-4 h-4 text-white/40" />
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a task..."
          className="flex-1 bg-transparent border-none outline-none text-white/90 placeholder:text-white/30"
        />
      </motion.div>
    </div>
  );
}
