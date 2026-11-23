import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c9e8",
  },
  {
    id: 4,
    name: "Pothos",
    price: 18,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 22,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: 14,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 16,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 13,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 17,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 11,
    name: "Cactus",
    price: 10,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 19,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 13,
    name: "Monstera",
    price: 30,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 14,
    name: "Bird of Paradise",
    price: 35,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1597055181300-1e3c9e7c2f4e",
  },
  {
    id: 15,
    name: "Calathea",
    price: 28,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 16,
    name: "Philodendron",
    price: 24,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 17,
    name: "Fiddle Leaf Fig",
    price: 32,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 18,
    name: "ZZ Plant",
    price: 26,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1597055181300-1e3c9e7c2f4e",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    ...new Set(plants.map((plant) => plant.category)),
  ];

  const isAdded = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      <p>Discover our collection of beautiful houseplants.</p>

      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="plants-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>${plant.price.toFixed(2)}</p>

                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;