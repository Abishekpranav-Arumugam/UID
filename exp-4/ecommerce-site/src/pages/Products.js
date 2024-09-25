import React from 'react';
import './Product.css'; // Import the CSS file

function Products({ addToCart }) {
  const productList = [
    { id: 1, name: 'iPhone 12', price: 799, image: 'https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-3j7db.jpg' },
    { id: 2, name: 'Samsung Galaxy S21', price: 999, image: 'https://r2.community.samsung.com/t5/image/serverpage/image-id/2968353iE7DD8E16B09591F3?v=v2' },
    { id: 3, name: 'OnePlus 9', price: 729, image: 'https://www.91-img.com/pictures/144850-v2-oneplus-nord-n200-mobile-phone-hres-1.jpg' },
  ];

  return (
    <div className="container mt-4">
      <h1>Our Products</h1>
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top product-img" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => alert(`Bought ${product.name}`)}
                >
                  Buy Now
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
