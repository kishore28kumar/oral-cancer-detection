import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar px-5 py-4">
      <img src={Logo} className="logo" alt="openscanai" />
      <div className="rnav">
        {/* <button className="btn rounded-pill github-btn ">
          <span className="d-flex justify-content-center align-items-center">
            About US
          </span>
        </button> */}
        <a
          className="git-btn"
          href="https://github.com/kishore28kumar/oral-cancer-detection-"
        >
          <button className="btn rounded-pill github-btn ml-3">
            <span className="d-flex justify-content-center align-items-center">
              GitHub
            </span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
