import { useState } from "react";
import ProductRow from "../components/layout/ProductRow";
import Header from "../components/layout/Header";
import Button from "../components/ui/Button";

interface Product {
  name: string;
  quantity: number;
  unit: string;
  price: number;
}

const AddCheckPage = () => {
  const [products, setProducts] = useState<Product[]>([
    { name: "", quantity: 1, unit: "pcs", price: 0 },
  ]);

  const handleChange = (index: number, field: keyof Product, value: string | number) => {
    const updated = [...products];
    updated[index][field] = value as never;
    setProducts(updated);
  };

  const handleAddRow = () => {
    setProducts([...products, { name: "", quantity: 1, unit: "pcs", price: 0 }]);
  };

  const handleSave = () => {
    console.log("Saved products:", products);
    // Здесь можно сделать отправку на сервер
  };

  return (
    <>
    <Header/>
    <div className="p-4 space-y-4">
      {products.map((product, index) => (
        <ProductRow
          key={index}
          name={product.name}
          quantity={product.quantity}
          unit={product.unit}
          price={product.price}
          onChange={(field, value) => handleChange(index, field as keyof Product, value)}
        />
      ))}

      <div className="flex justify-center">
        <Button onClick={handleAddRow}>Add product</Button>
      </div>

      <div className="mt-8">
        <Button className="w-full py-4 text-lg font-semibold" onClick={handleSave}>
          Save products
        </Button>
      </div>
    </div>
    </>
  );
};

export default AddCheckPage;
