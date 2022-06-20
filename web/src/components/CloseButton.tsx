import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

type CloseButtonProps = {};

const CloseButton = (props: CloseButtonProps) => {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
};
export { CloseButton };
