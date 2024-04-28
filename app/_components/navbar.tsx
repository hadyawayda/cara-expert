const Navbar = () => {
  return (
    <>
      <header className="flex justify-between h-28 items-center mx-36 px-4">
        <div className="flex justify-between left-navbar">
          <div className="flex justify-center w-20">Logo</div>
          <div className="flex justify-between w-96">
            <div>Explore</div>
            <div>Services</div>
            <div>Products</div>
            <div>Loyalty</div>
            <div>About</div>
          </div>
        </div>
        <div className="flex justify-between w-44">
          <div className="flex justify-between w-16">
            <div>f</div>
            <div>I</div>
            <div>in</div>
          </div>
          <div className="flex justify-between w-20">
            <div>S</div>
            <div>C</div>
            <div>L</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
