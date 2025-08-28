import { Metadata } from "next";

import PlaygroundPageHeader from "@/components/playground/page-header";
import PlaygroundTrends from "@/components/playground/trends";
import PlaygroundTransactionItems from "@/components/playground/transaction-items";
import PlaygroundToasters from "@/components/playground/toasters";
import PlaygroundButtons from "@/components/playground/buttons";
import PlaygroundTransactionSubLists from "@/components/playground/transaction-sub-lists";
import PlaygroundForm from "@/components/playground/form";
import PlaygroundCheckboxes from "@/components/playground/checkboxes";
import PlaygroundSkeletons from "@/components/playground/skeletons";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "This is a small list of all the tools create and used in this project!",
};

const PlaygroundPage = () => {
  return (
    <main className="flex flex-col mb-44 gap-8">
      <h1 className="text-4xl mt-8">Playground Page</h1>

      <PlaygroundPageHeader />
      <PlaygroundTrends />
      <PlaygroundTransactionItems />
      <PlaygroundTransactionSubLists />
      <PlaygroundButtons />
      <PlaygroundForm />
      <PlaygroundToasters />
      <PlaygroundCheckboxes />
      <PlaygroundSkeletons />
      {/*
       <div>
       <h2 className="mb-4 text-lg font-mono">Component</h2>
       <Separator />
       <div className="flex flex-row gap-8">
       <Component />
       <Component />
       <Component />
       <Component />
       </div>
       </div>
       */}
    </main>
  );
};

export default PlaygroundPage;
