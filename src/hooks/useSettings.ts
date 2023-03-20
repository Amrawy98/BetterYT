import { Dispatch, SetStateAction } from "react";
import { useLocalStorage } from "usehooks-ts";

export type Settings = {
  fullQueueTime: boolean;
  //   subscriptionsSearch: Boolean;
  //   subscriptionsOrderFilter: Boolean;
  //   commentsSection: Boolean;
  //   filterCommentsSection: Boolean;
};

const useSettings = (): [Settings, Dispatch<SetStateAction<Settings>>] => {
  const [settings, setSettings] = useLocalStorage<Settings>(
    "scriptor-settings",
    {
      fullQueueTime: false,
      //   subscriptionsSearch: false,
      //   subscriptionsOrderFilter: false,
      //   commentsSection: false,
      //   filterCommentsSection: false,
    }
  );
  return [settings, setSettings];
};
export default useSettings;
