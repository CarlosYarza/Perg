import Link from "next/link";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import Products from "../../components/Products";
import { client } from "../../lib/sanity/client";
import { merchQuery } from "../../lib/sanity/merchQuery";
import Navbar from "../../components/Layout/Navbar";

const Merch = ({ products }) => {
  return (
    <main>
      <Navbar />
      <h1>My Merch Store</h1>
      <Cart>
        <Products products={products} />
        <CartSummary />
      </Cart>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </main>
  );
};

export default Merch;

export async function getStaticProps({ params }) {
  const products = await client.fetch(merchQuery);

  return {
    props: {
      products,
    },
  };
}
