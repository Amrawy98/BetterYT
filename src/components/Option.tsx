import { Switch } from "@headlessui/react";
import { OptionConfig } from "../types";

export default function Option({
  label,
  onToggle,
  enabled,
  description,
}: OptionConfig) {
  //TODO: make sure disabled options have a specific style showing they are disabled
  //TODO: Figure out colors and fonts
  //TODO: add a popover for description that shows when needed
  //TODO: figure out vertical alignment for the switches

  return (
    <Switch.Group>
      <div className="x mb-1 flex items-center justify-between text-base text-timberwolf">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onToggle}
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
    </Switch.Group>
  );
}
