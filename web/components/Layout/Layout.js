import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="mt-2 md:mt-8">
      <Navbar />
      <main className="m-12 m-auto">{props.children}</main>
    </div>
  );
}

export default Layout;
