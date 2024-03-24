import BankSignIn from "@/components/BankSignIn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-4xl">
      <BankSignIn />
    </main>
  );
}
