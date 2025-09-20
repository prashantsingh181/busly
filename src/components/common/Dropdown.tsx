import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";

interface DropDownContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOpen: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

interface TriggerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
interface ContentProps {
  as?: React.ElementType;
  className?: string;
  placement?:
    | "bottom-left"
    | "start-end"
    | "top-left"
    | "bottom-start"
    | "bottom-end"
    | "top-start";
  children?: React.ReactNode;
}
const DropDownContext = createContext<DropDownContextType>({
  open: false,
  setOpen: () => {},
  toggleOpen: () => {},
  dropdownRef: { current: null },
});

const Dropdown = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className: string }>) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen((previousState) => !previousState);
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (open && toggleOpen) {
          toggleOpen();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, toggleOpen]);

  return (
    <DropDownContext.Provider
      value={{ open, setOpen, toggleOpen, dropdownRef }}
    >
      <div ref={dropdownRef} className={`dropdown relative ${className}`}>
        {children}
      </div>
    </DropDownContext.Provider>
  );
};

export const Trigger = ({
  children,
  className,
  id,
}: Readonly<TriggerProps>) => {
  const { toggleOpen } = useContext(DropDownContext);

  const getClassNameButton = className
    ? className
    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <>
      <button id={id} onClick={toggleOpen} className={getClassNameButton}>
        {children}
      </button>
    </>
  );
};

const Content = ({
  as: Component = "div",
  className,
  children,
  placement,
}: Readonly<ContentProps>) => {
  const { open, setOpen, dropdownRef } = useContext(DropDownContext);

  const getClassName =
    className ??
    "absolute z-50 mt-1 text-left list-none bg-bg-900 rounded-md shadow-md dropdown-menu min-w-max";

  const [placementState, setPlacementState] = useState("bottom-left");

  useEffect(() => {
    if (placement) setPlacementState(placement);
  }, [placement]);

  const getDropdownStyle = useCallback(() => {
    if (dropdownRef.current) {
      const dropdownElement = dropdownRef.current.querySelector(
        ".dropdown-content",
      ) as HTMLElement;
      if (open && placementState === "bottom-left" && dropdownRef.current) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.inset = "100% 0 auto auto";
        dropdownElement.style.margin = "0px";
      }
      if (open && placementState === "start-end" && dropdownRef.current) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.inset = "0px auto auto 0px";
        dropdownElement.style.margin = "0px";
        dropdownElement.style.transform = "translate(0px, 20px)";
      }
      if (open && placementState === "top-left" && dropdownRef.current) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.inset = "auto 100% 100% auto";
        dropdownElement.style.margin = "0px";
        // dropdownElement.style.transform = "translate(-58px, -30px)";
      }
      if (open && placementState === "bottom-start" && dropdownRef.current) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.inset = "0px 0px auto auto";
        dropdownElement.style.margin = "0px";
        dropdownElement.style.transform = "translate(0px, 54px)";
      }
      if (open && placementState === "bottom-end" && dropdownRef.current) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.inset = "0px 0px auto auto";
        dropdownElement.style.margin = "0px";
        dropdownElement.style.transform = "translate(0px, 39px)";
      }
      if (open && placementState === "top-start" && dropdownRef.current) {
        dropdownElement.style.position = "absolute";
        dropdownElement.style.inset = "auto auto 0px 0px";
        dropdownElement.style.margin = "0px";
        dropdownElement.style.transform = "translate(0px, -95px)";
      }
    }
    return {};
  }, [open, placementState, dropdownRef]);
  useEffect(() => {
    getDropdownStyle();
  }, [open, getDropdownStyle]);

  return (
    <>
      {open && (
        <Component
          onClick={() => setOpen(false)}
          className={`dropdown-content ${getClassName}`}
        >
          {children}
        </Component>
      )}
    </>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;

export { Dropdown };
