import { Hand } from "lucide-react";

export const GestureButton = () => {
  return (
    <div className="flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full bg-neutral-50 text-neutral-500 text-sm font-medium">
      <Hand strokeWidth={1.5} size={16} />
      <span>Gesture Control Active</span>
    </div>
  );
};
