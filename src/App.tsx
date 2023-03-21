import { useEffect } from "react";
import Option from "./components/Option";
import useSettings from "./hooks/useSettings";
import { setting } from "./types";

function App() {
  const options: setting[] = [
    {
      settingKey: "fullQueueTime",
      label: "Show queue full time",
    },
    // {
    //   settingKey: "subscriptionsSearch",
    //   label: "Subscriptions search",
    // },
    // {
    //   settingKey: "subscriptionsOrderFilter",
    //   label: "Subscriptions order filters",
    // },
    // {
    //   settingKey: "commentsSection",
    //   label: "Enable Comments Section",
    // },
    // {
    //   settingKey: "filterCommentsSection",
    //   label: "Enable Comments Section Filter",
    // },
  ];
  const [settings, setSettings] = useSettings();

  useEffect(() => {
    chrome.runtime.sendMessage(settings);
  }, [settings]);

  return (
    <div className="h-[300px] w-[250px] bg-delft-blue p-2">
      {options.map((option, index) => (
        <Option
          key={option.settingKey}
          settingKey={option.settingKey}
          label={option.label}
          description={option.description}
          enabled={settings[option.settingKey as keyof typeof settings]}
          onToggle={() =>
            setSettings((prevValue) => ({
              ...settings,
              [option.settingKey]:
                !prevValue[option.settingKey as keyof typeof settings],
            }))
          }
        />
      ))}
    </div>
  );
}

export default App;
