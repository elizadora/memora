
import classNames from 'classnames';
// order
// false and true
export const selectClassNamesCustom = {
  clearIndicator: ({ isFocused }) =>
    classNames(
      isFocused ? 'text-rich-black' : 'text-rich-black/80 hover:text-rich-black', 'p-3', 'cursor-pointer'
    ),
  control: () =>
    classNames(
      'rounded-md',
      'border-2',
      'border-rich-black',
    ),
  dropdownIndicator: ({ isFocused }) =>
    classNames(
      'flex',
      'items-center',
      'justify-center',
      isFocused ? 'text-white-smoke' : 'text-white-smoke/80 hover:text-white-smoke',
      'w-9',             // Largura fixa
      'h-full',             // Altura fixa
      'cursor-pointer',
      'bg-rich-black',
    ),
  // group: () => classNames('my-20', 'bg-red-900'),
  // groupHeading: () =>
  //   classNames('text-rich-black', 'text-2xl', 'font-medium', 'mb-10', 'px-90', 'uppercase'),
  input: () => classNames('m-0.5', 'py-0.5', 'text-rich-black', 'text-xl'),
  loadingIndicator: ({ isFocused }) =>
    classNames(isFocused ? 'text-neutral-600' : 'text-neutral-200', 'p-2'),
  loadingMessage: () => classNames('text-neutral-400', 'py-2', 'px-3'),
  menu: () =>
    classNames('bg-white-smoke', 'rounded-md', 'shadow-lg', 'my-1'),

  menuList: () => classNames('py-2'),
  multiValue: () => classNames('bg-oxford-blue', 'text-white-smoke', 'rounded-sm', 'm-1'),
  multiValueLabel: () =>
    classNames('rounded-sm', 'text-white-smoke', 'text-sm', 'p-1', 'pl-3'),

  multiValueRemove: () =>
    classNames(
      'rounded-sm',
      'px-1',
      'hover:bg-crimson',
      'hover:text-white-smoke',
      'cursor-pointer'
    ),
  noOptionsMessage: () => classNames('text-oxford-bluek', 'py-2', 'px-3'),
  option: ({ isFocused, }) =>
    classNames(
      isFocused
        ? 'bg-rich-black text-white-smoke'
        : 'bg-transparent',
      'py-2',
      'px-3',
    ),
  placeholder: () => classNames('text-oxford-blue/80', 'mx-0.5'),
  singleValue: ({ isDisabled }) =>
    classNames(isDisabled ? 'text-neutral-400' : 'text-neutral-800', 'mx-0.5'),
  valueContainer: () => classNames('py-0.5', 'px-2'),
};
