import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="flex items-center gap-4">
      <button
        onClick={() => setCount(c => c - 1)}
        class="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:border-zinc-500 dark:hover:border-zinc-400 transition-colors"
      >
        −
      </button>
      <span class="text-2xl font-light tabular-nums w-8 text-center">{count()}</span>
      <button
        onClick={() => setCount(c => c + 1)}
        class="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:border-zinc-500 dark:hover:border-zinc-400 transition-colors"
      >
        +
      </button>
    </div>
  )
}
