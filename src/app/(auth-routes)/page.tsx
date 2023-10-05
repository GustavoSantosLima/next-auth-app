"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    router.replace("/admin");
  }
  // username: 'kminchelle',
  // password: '0lelplR',
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-xl w-full flex flex-col bg-slate-900 p-8 rounded-xl gap-8">
        <h1 className="text-center text-2xl">Acesse o sistema</h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Digite seu usuário..."
            onChange={event => setUsername(event.target.value)}
            className="border border-gray-400 rounded-lg p-2 m-2 bg-slate-700"
          />
          <input
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            placeholder="Digite sua senha..."
            onChange={event => setPassword(event.target.value)}
            className="border border-gray-400 rounded-lg p-2 m-2 bg-slate-700"
          />
          <button
            type="submit"
            className="border border-gray-400 rounded-lg p-2 m-2 hover:bg-slate-800"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
