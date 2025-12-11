import OperatorList from "./components/OperatorList";

export default function Home() {

  return (
    <div className="font-sans min-h-screen bg-neutral-900">
      <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-900">
        <div>
          <h1 className="text-4xl text-white p-2">Operators</h1>
          <OperatorList/>
        </div>
      </main>
    </div>
  );
}
