import { useState } from "react";
import Option from "./components/Option";
import { OptionConfig } from "./types";

function App() {
  const options: OptionConfig[] = [
    {
      label: "Subscriptions search",
      description: "banana",
      onToggle: () => console.log("banana"),
    },
    {
      label: "Show queue full time",
      description: "banana",
      onToggle: () => console.log("banana"),
    },
    {
      label: "Subscriptions order filters",
      description: "banana",
      onToggle: () => console.log("banana"),
    },
  ];

  return (
    <div className="h-[300px] w-[250px] bg-delft-blue p-2">
      {options.map((option, index) => (
        <Option
          label={option.label}
          description={option.description}
          onToggle={option.onToggle}
        />
      ))}
    </div>
  );
}

export default App;
