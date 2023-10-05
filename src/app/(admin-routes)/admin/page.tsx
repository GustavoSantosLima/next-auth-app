import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "@/components/ButtonLogout";
import { getServerSession } from "next-auth";

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center flex-col gap-4">
        <h1 className="text-center text-lg">
          Olá, {session?.firstName || "usuário"}. Bem vindo(a)!
        </h1>
        <ButtonLogout />
      </div>
    </main>
  );
}
