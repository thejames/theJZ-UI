/**
 * Datalist — typed wrappers around HTML `<datalist>` + `<option>` for
 * Input autocomplete suggestions.
 *
 * Usage:
 *   <Input list="cities" name="city" />
 *   <Datalist id="cities">
 *     <DatalistOption value="Boston" />
 *     <DatalistOption value="Brooklyn" />
 *   </Datalist>
 *
 * Suggestions are styled entirely by the browser; this component exists
 * mostly for ergonomics and type-checking. For a fully-styled autocomplete
 * (filter + keyboard nav + custom rendering), reach for a Combobox pattern
 * instead.
 */
import {
  forwardRef,
  type DataHTMLAttributes,
  type OptionHTMLAttributes,
} from "react";

export type DatalistProps = DataHTMLAttributes<HTMLDataListElement>;

export const Datalist = forwardRef<HTMLDataListElement, DatalistProps>(
  (props, ref) => <datalist ref={ref} {...props} />,
);
Datalist.displayName = "Datalist";

export type DatalistOptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export const DatalistOption = forwardRef<HTMLOptionElement, DatalistOptionProps>(
  (props, ref) => <option ref={ref} {...props} />,
);
DatalistOption.displayName = "DatalistOption";
