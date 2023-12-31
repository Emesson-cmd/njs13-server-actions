import { revalidatePath } from 'next/cache';
import AddButton from './AddButton';

const todos: string[] = ['Learn React'];

export default function formPostWithTransition() {
  async function addTodo(todo: string) {
    'use server';

    await new Promise((resolve) => setTimeout(resolve, 3000));

    todos.push(todo);
    revalidatePath('/formPostWithTransition');
  }

  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <AddButton addTodo={addTodo} />
      </div>
    </main>
  );
}
