import { useState } from "react";
import { Switch } from "@headlessui/react";
import { OptionConfig } from "../types";

export default function Option({ label, onToggle, description }: OptionConfig) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div className="flex items-center justify-between text-base text-timberwolf">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-fern-green" : "bg-gray-500"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-timberwolf transition-transform`}
          />
        </Switch>
      </div>
      <Switch.Label className="mr-4 text-sm text-timberwolf">
        {description}
      </Switch.Label>
    </Switch.Group>
  );
}
