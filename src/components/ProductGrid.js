import { useEffect, useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['phones', 'headphones', 'watches', 'tablets'];
        const fetchedProducts = await Promise.all(
          categories.map((category) =>
            fetch(`http://localhost:3001/api/${category}`).then((res) => res.json())
          )
        );
        console.log(fetchedProducts);  // Логирование данных
        setProducts(fetchedProducts.flat());
      } catch (err) {
        setError("Ошибка загрузки");
      }
    };
  
    fetchProducts();
  }, []);
  
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {products.length === 0 ? (
        <p className="text-xl">No products available</p>
      ) : (
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 place-items-center">
          {products.map((item) => (
            <div 
              key={item.id} 
              className="border p-4 rounded-x w-full max-w-[300px] flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-medium text-1xl text-center">{item.name}</h3>
              <p className="text-xl font-bold my-2">${item.price}</p>
              <button className="bg-black text-white px-4 py-2 mt-2 rounded hover:bg-gray-800 transition">
                Buy now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;