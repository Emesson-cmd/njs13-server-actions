'use client';

import { useRef, useTransition } from 'react';

export default function AddButton({ addTodo }: { addTodo: (todo: string) => Promise<void> }) {
  let [pending, startTransition] = useTransition();
  const todoRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        ref={todoRef}
        type="text"
        name="todo"
        className="border border-gray-300 rounded-lg py-4 px-4 text-base text-black disabled:bg-gray-300"
      />
      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async () => {
            await addTodo(todoRef.current!.value);
          });
        }}
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        submit
      </button>
    </div>
  );
}
