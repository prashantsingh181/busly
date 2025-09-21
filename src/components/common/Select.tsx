import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaX, FaChevronDown } from "react-icons/fa6";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface OptionBase {
  label: string;
  value: number | string;
}

export interface Option extends OptionBase {
  [key: string]: unknown;
}

interface MultiSelectProps {
  placeholder?: string;
  name: string;
  id?: string;
  label?: string;
  options: Option[];
  value: Option[];
  onChange: (option: Option[]) => void;
  isMulti: true;
  isDisabled?: boolean;
  className?: string;
  shouldFilter?: boolean;
}

interface SingleSelectProps {
  placeholder?: string;
  name: string;
  id?: string;
  label?: string;
  options: Option[];
  onDebouncedChange?: (value: string) => void;
  value: Option | null;
  onChange: (option: Option) => void;
  onScrollToBottom?: () => void;
  isMulti?: false;
  isDisabled?: boolean;
  className?: string;
  shouldFilter?: boolean;
}

type SelectProps = SingleSelectProps | MultiSelectProps;

const Select = ({
  placeholder = "Select...",
  name,
  id = "dropdownId",
  label,
  options: dropdownOptions,
  value,
  onChange,
  isMulti,
  isDisabled,
  className,
  shouldFilter = true,
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const toggleDropdown = useCallback(() => setIsVisible((prev) => !prev), []);
  const hideDropdown = useCallback(() => {
    setIsVisible(false);
    setFocusedIndex(-1);
  }, []);
  const inputPlaceholder = isMulti ? placeholder : value ? "" : placeholder;
  useOnClickOutside(containerRef, () => {
    hideDropdown();
    setSearchTerm("");
  });

  // computing options to display
  const displayOptions = useMemo(() => {
    let filteredDropdownOptions: Option[] = dropdownOptions;
    if (isMulti) {
      filteredDropdownOptions = dropdownOptions.filter(
        (option) =>
          !value?.find((valueOption) => valueOption.value === option.value),
      );
    }
    if (shouldFilter) {
      filteredDropdownOptions = filteredDropdownOptions.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filteredDropdownOptions;
  }, [value, dropdownOptions, isMulti, shouldFilter, searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
  };

  // Reset focused index when dropdown visibility changes
  useEffect(() => {
    if (isVisible) {
      setFocusedIndex(-1);
    }
  }, [isVisible]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setIsVisible(true);
    }
  }, [searchTerm]);

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && dropdownRef.current) {
      const focusedElement = dropdownRef.current.querySelector(
        `li:nth-child(${focusedIndex + 1})`,
      );
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [focusedIndex]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isVisible) {
      if (e.code === "Enter" || e.code === "Space" || e.code === "ArrowDown") {
        e.preventDefault();
        toggleDropdown();
      }
      return;
    }

    switch (e.code) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex < displayOptions.length - 1 ? prevIndex + 1 : prevIndex,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < displayOptions.length) {
          handleOptionSelect(displayOptions[focusedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        hideDropdown();
        break;
      default:
        break;
    }
  }

  // handling selection of option
  const handleOptionSelect = (option: Option) => {
    const alreadySelected = isMulti
      ? value?.findIndex(
          (dropdownOption) => dropdownOption.value === option.value,
        ) !== -1
      : option.value === value?.value;
    let newOption: Option | Option[];
    if (alreadySelected && value !== null) {
      newOption = value;
    } else {
      newOption = isMulti ? [...value, option] : option;
    }
    if (isMulti) {
      onChange(newOption as Option[]);
    } else {
      onChange(newOption as Option);
    }
    setSearchTerm("");
    if (!isMulti) {
      hideDropdown();
    }
  };

  // handling remove of selected option
  const handleRemoveOption = (optionValue: number | string) => {
    if (isMulti) {
      const updatedOptions = value?.filter(
        (option) => option.value !== optionValue,
      );

      onChange(updatedOptions);
    }
  };

  return (
    <div
      className={`relative max-w-full ${className ?? ""}`}
      ref={containerRef}
    >
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}

      <div
        className={`input-text-container flex items-center gap-2 rounded-lg ${
          isDisabled ? "bg-neutral-600/70" : ""
        }`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={isVisible}
      >
        {isMulti && value?.length > 0 && (
          <div className="inline-flex flex-wrap gap-2 px-2 py-1">
            {value.map((option) => {
              return (
                <div
                  key={option.value}
                  className={`bg-theme-700 border-theme-700 hover:bg-theme-600 hover:border-theme-600 flex items-center gap-1.5 rounded px-2 py-1 text-sm text-white hover:text-white ${
                    isDisabled && "cursor-not-allowed"
                  }`}
                >
                  <span>{option.label}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveOption(option.value);
                    }}
                    className={`transition-color rounded-full border border-red-400 duration-300 ease-linear hover:border-red-700 hover:bg-white ${
                      isDisabled && "cursor-not-allowed"
                    }`}
                    disabled={isDisabled}
                  >
                    <FaX className="size-3.5 text-red-700" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="relative h-[2.75rem] flex-1 text-neutral-700/75">
          {!isMulti && value && !searchTerm && (
            <div className="py-3">{value.label}</div>
          )}

          <input
            id={`id_${id}`}
            name={`search_${name}`}
            type="text"
            className={`h-full ${className ?? ""}`}
            onWheel={(e) => e.currentTarget.blur()}
            placeholder={inputPlaceholder}
            value={searchTerm}
            onChange={handleInputChange}
            autoComplete="off"
            disabled={isDisabled}
          />
          {/* <DebouncedInput
            className="h-full"
            // debouncedAction={onDebouncedChange}
          /> */}
        </div>

        <div
          className={`dropdown-indicator p-2 text-neutral-600/75 ${
            isDisabled && "cursor-not-allowed"
          }`}
        >
          <FaChevronDown />
        </div>
      </div>

      {/* Dropdown */}
      {!isDisabled && isVisible ? (
        <div
          ref={dropdownRef}
          className="text-textPrimary absolute z-30 mt-1 max-h-44 w-full overflow-auto rounded-lg border border-[#e5e5e5] bg-neutral-100 shadow-lg"
        >
          {displayOptions?.length > 0 ? (
            <ul className="w-full">
              {displayOptions.map((option, index) => {
                const isSelected = isMulti
                  ? (value as Option[]).some((v) => v.value === option.value)
                  : (value as Option)?.value === option.value;
                return (
                  <li
                    key={option.value}
                    className={`${
                      isSelected
                        ? "bg-theme-500 text-white"
                        : index === focusedIndex
                          ? "bg-neutral-300"
                          : "hover:bg-neutral-300"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <button
                      className="w-full p-2 text-left"
                      onClick={() => handleOptionSelect(option)}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      {option.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="p-2">No Options...</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
