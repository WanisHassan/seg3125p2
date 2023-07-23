import React from "react";
import { useProductsContext } from "../../context/products/products.provider";

import "./index.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const Sneakers = () => {
  const { products } = useProductsContext();
  const [filteredProducts, setFilteredProducts] = React.useState([]); // Listed Products
  const [brands, setBrands] = React.useState([]);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [sizes, setSizes] = React.useState([]);
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(1000);

  const { slug } = useParams();

  // Filter the products based on the slug
  React.useEffect(() => {
    // If there are no products, return
    if (!products) return;

    // If the slug is more-brands, return all the products
    if (slug === "more-brands") {
      setFilteredProducts(products);
      return;
    }

    // If the slug is new-releases, return all the products that are new releases
    if (slug === "new-releases") {
      setFilteredProducts(products.filter((product) => product.isNewRelease));
      return;
    }

    if (slug) {
      setFilteredProducts(
        products?.filter(
          (product) =>
            product.brand.toLowerCase() === slug.replace("-", " ").toLowerCase()
        )
      );
    }
  }, [slug, products]);

  // Get all the brands
  React.useEffect(() => {
    const brands = products?.map((product) => product.brand);
    setBrands([...new Set(brands)]);
  }, [products]);

  // Get all the sizes
  React.useEffect(() => {
    const values = products?.map((product) => parseFloat(product.size));
    setSizes([...new Set(values)].sort((a, b) => b - a));
  }, [products]);

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    let temp = [...selectedBrands];

    if (!checked) {
      temp = temp.filter(
        (brand) => brand.toLowerCase() !== value.toLowerCase()
      );
    } else {
      temp.push(value.toLowerCase());
    }

    if (!temp.length) {
      slug === "more-brands"
        ? setFilteredProducts(products)
        : setFilteredProducts(
            products?.filter(
              (product) =>
                product.brand.toLowerCase() ===
                slug.toLowerCase().replace("-", " ")
            )
          );
      setSelectedBrands([]);
      return;
    }

    setFilteredProducts(
      products?.filter((product) => temp.includes(product.brand.toLowerCase()))
    );
    setSelectedBrands(temp);
  };

  const handleSizeChange = (value, checked) => {
    let temp = [...selectedSizes];


    if (!checked) {
      temp = temp.filter((size) => size !== value);
    } else {
      temp.push(value);
    }

    if (!temp.length) {
      slug === "more-brands"
        ? setFilteredProducts(products)
        : setFilteredProducts(
            products?.filter(
              (product) =>
                product.brand.toLowerCase() ===
                slug.toLowerCase().replace("-", " ")
            )
          );
      setSelectedSizes([]);
      return;
    }

    setFilteredProducts(
      products?.filter((product) => temp.includes(parseFloat(product.size)))
    );

    setSelectedSizes(temp);
  };

  const handlePriceChange = (e) => {
    const { id, value } = e.target;
    if (id === "min-price") {
      setMinPrice(value);
      setFilteredProducts(
        products?.filter(
          (product) =>
            parseFloat(product.price) >= parseFloat(value) &&
            parseFloat(product.price) <= parseFloat(maxPrice)
        )
      );
    } else {
      setMaxPrice(value);
      setFilteredProducts(
        products?.filter(
          (product) =>
            parseFloat(product.price) >= parseFloat(minPrice) &&
            parseFloat(product.price) <= parseFloat(value)
        )
      );
    }
  };

  return (
    <div className="relative">
      <div className="sidebar">
        <h3>Brands</h3>
        <ul>
          {brands.map((brand) => (
            <li>
              <input
                type="checkbox"
                value={brand}
                onChange={handleBrandChange}
              />
              <span>{brand}</span>
            </li>
          ))}
        </ul>

        <h3>Sizes</h3>
        <ul className="sizes-grid">
          {sizes.map((size) => (
            <li
              className={selectedSizes.includes(size) ? "selected" : ""}
              onClick={() =>
                handleSizeChange(size, !selectedSizes.includes(size))
              }
            >
              {size}
            </li>
          ))}
        </ul>

        <h3>Price Range</h3>
        <div className="price-range">
          <div className="input-range-group">
            <label htmlFor="min-price">Min Price:</label>
            <div className="price-value">CA${minPrice}</div>

            <input
              type="range"
              id="min-price"
              min="0"
              max={maxPrice}
              value={minPrice}
              onChange={handlePriceChange}
            />
          </div>
          <div className="input-range-group">
            <label htmlFor="max-price">Max Price:</label>
            <div className="price-value">CA${maxPrice}</div>
            <input
              type="range"
              id="max-price"
              min={minPrice}
              max="1000"
              value={maxPrice}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      </div>

      <div className="items-section">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Link
              to={`/sneakers/detail/${product.id}`}
              className="product-card"
            >
              <div className="product-image">
                <img src={product.image_url} alt={product.name} />
              </div>
              <div className="product-info">
                <h5>{product.shoe_name}</h5>
                <h6>CA${product.price}</h6>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sneakers;
