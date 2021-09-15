import "./Category.css";

export function CategoryCard({ category, imgUrl, imgAlt }) {
  return (
    <div className="cardbody category-card">
      <img className="img-fluid p-2 category-img" src={imgUrl} alt={imgAlt} />
      <p className="category-name">{category}</p>
    </div>
  );
}

export function CategoryPill({ category, imgUrl }) {
  return (
    <div className="cardbody category-pill">
      <img className="category-icon" src={imgUrl} alt={category} />
      <p
        className="category-name"
        style={{ paddingLeft: "10px", paddingTop: "15px" }}
      >
        {category}
      </p>
    </div>
  );
}
