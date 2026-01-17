type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-400 py-3">
      <h4 className="font-semibold mb-2">Property Rating</h4>

      {["5", "4", "3", "2", "1"].map((star) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="size-5"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />

          <span>{star} Star</span>
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
