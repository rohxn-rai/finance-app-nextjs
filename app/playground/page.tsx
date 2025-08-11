import Header from "@/components/Header";
import Trend from "@/components/Trend";

const PlaygroundPage = () => {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-4xl mt-8">Playground Page</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">Page Header</h2>
        <hr className="mb-4 border-gray-200 dark:border-y-gray-800" />
        <div>
          <Header />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-y-gray-800" />
        <div className="flex flex-row gap-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expense" amount={12000} prevAmount={10000} />
          <Trend type="Investment" amount={7000} prevAmount={11100} />
          <Trend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>
    </main>
  );
};

export default PlaygroundPage;
