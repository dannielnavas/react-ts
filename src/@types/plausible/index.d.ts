type Options = {
  props?: Record<string, unknown>;
  callback?: () => void;
};

interface Window {
  plausible: (eventName: "add_fox" | "remove_fox", options?: Options) => void;
}
