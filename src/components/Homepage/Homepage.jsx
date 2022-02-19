import "./Homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="menu-container">
        <div className="menu-item">
          <div className="menu-item-content">
            <h1 className="menu-item-name">HATS</h1>
            <div className="menu-item-shop">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-content">
            <h1 className="menu-item-name">JACKETS</h1>
            <div className="menu-item-shop">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-content">
            <h1 className="menu-item-name">SNEAKERS</h1>
            <div className="menu-item-shop">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-content">
            <h1 className="menu-item-name">WOMEN</h1>
            <div className="menu-item-shop">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-content">
            <h1 className="menu-item-name">MEN</h1>
            <div className="menu-item-shop">SHOP NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
