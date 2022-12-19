import { categoryOptions, priceOptions } from "../data";

const ProductSelect = ({ options, name, setOption }) => {
  const changeOption = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{name.toUpperCase()}</span>
      </label>
      <select
        className="select-bordered select"
        defaultValue="default"
        onChange={changeOption}
      >
        <option value="default">All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const ProductCheckboxes = ({ options, name, choices, setChoices }) => {
  const changeOptions = (e) => {
    if (e.target.checked) {
      setChoices([...choices, e.target.value]);
    } else {
      setChoices(choices.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="form-control">
      {/* Name */}
      <label className="label">
        <span className="label-text">{name.toUpperCase()}</span>
      </label>
      {/* Checkboxes */}
      <div>
        {options.map((item) => {
          return (
            <label
              key={item.value}
              className="label cursor-pointer justify-start gap-3"
            >
              <input
                type="checkbox"
                className="checkbox"
                value={item.value}
                onChange={changeOptions}
              />
              <span className="label-text text-base">{item.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const ProductFilter = ({ setCategory, priceRanges, setPriceRanges }) => {
  return (
    <div>
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Layout */}
        <div className="flex flex-col items-start gap-6 py-8">
          <ProductSelect
            setOption={setCategory}
            options={categoryOptions}
            name="category"
          />
          <ProductCheckboxes
            options={priceOptions}
            name="price"
            choices={priceRanges}
            setChoices={setPriceRanges}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
