// Define the type for props
interface SliderProps {
  sliders: { label: string; weight: number }[];
  updateWeight: (index: number, newWeight: number) => void;
}

export const Sliders: React.FC<SliderProps> = ({ sliders, updateWeight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      {sliders.map((slider, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label htmlFor={`slider-${index}`}>
            {slider.label}: {slider.weight}
          </label>
          <br />
          <input
            type="range"
            id={`slider-${index}`}
            min="0"
            max="100"
            value={slider.weight}
            onChange={(e) => updateWeight(index, parseInt(e.target.value, 10))}
          />
        </div>
      ))}
    </div>
  );
};
