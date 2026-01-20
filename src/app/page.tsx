import OperatorList from "./components/OperatorList";

export default function Home() {

  return (
    <div className="font-sans min-h-screen">
        <div>
          <h1 className="text-4xl text-white p-2">Operators</h1>
          <OperatorList/>
        </div>
    </div>
  );
}
