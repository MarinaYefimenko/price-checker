import { FC } from "react";

interface ProductRowProps {
  name: string;
  quantity: number;
  unit: string;
  price: number;
  onChange: (field: string, value: string | number) => void;
}

const units = ["kg", "g", "pcs"];

const ProductRow: FC<ProductRowProps> = ({ name, quantity, unit, price, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full mb-2">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
        className="flex-1 border rounded p-2"
      />
      <input
        type="number"
        placeholder="Qty"
        value={quantity}
        onChange={(e) => onChange("quantity", Number(e.target.value))}
        className="w-20 border rounded p-2"
      />
      <select
        value={unit}
        onChange={(e) => onChange("unit", e.target.value)}
        className="w-24 border rounded p-2"
      >
        {units.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => onChange("price", Number(e.target.value))}
        className="w-24 border rounded p-2"
      />
    </div>
  );
};

export default ProductRow;