export type setting = {
  settingKey: string;
  label: string;
  description?: string;
};
export type OptionConfig = setting & {
  onToggle?: () => void;
  enabled?: boolean;
};
