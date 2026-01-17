type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div className="py-3">
      <h4 className="font-semibold mb-2">Max Price</h4>

      <select
        className="p-3 border border-slate-400 rounded-md w-full outline-blue-600"
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value="">Select Max Price</option>
        {[100, 200, 300, 400, 500, 800, 1000].map((price) => (
          <option value={price}>${price}</option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
