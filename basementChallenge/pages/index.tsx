import type { GetStaticProps, NextPage } from "next";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import header from "../public/header.svg"
import footer from "../public/footer.svg"
import { Product } from "../product/types";
import { Api } from "../api/api";
import logo from "../public/logo.svg"
import CardProducts from "../component/CardProducts";
import piece from "../public/Group.svg"
import { useContext, useMemo, useState } from "react";
import yourCard from "../public/yourcart.svg"
import close from "../public/Close.svg"
import CardAsideProduct from "../component/CardAsideProduct";
import check from "../public/checkout.svg"
import { ContextApp } from "../context/contextApp";


interface props {
  products: Product[]
}

export const getStaticProps: GetStaticProps<props, any> = async () => {
  const products = await Api.list()
  return {
    props: {
      products
    }
  }
}


const Home: NextPage<props> = ({ products }) => {

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const {state,actions} = useContext(ContextApp)

  const handlePrice = useMemo(() => {
    const price = state.cart.reduce((sum, product) => {
      return sum = sum + ((product.price * product.options.quantity))
    }, 0)
    return price
  }, [state.cart])

  return (
    <main className="container mx-auto relative">
      <section className=" absolute top-56 right-0 min-w-full z-30 flex justify-between">
        <Image width={120} height={120} alt="decoration" src={piece} className="animate-spin" />
        <Image width={120} height={120} alt="decoration" src={piece} className="animate-spin" />
      </section>
      <header className="my-1 min-w-full">
        <nav className="flex justify-between items-center overflow-hidden mb-2">
          <Image className="cover" alt="logo" src={logo} />
          <button onClick={() => setIsShowModal(true)} className="border-2 rounded-rq w-38 p-2 text-white text-xl font-bold font-BasementGrotesque leading-5 not-italic tracking-tighter uppercase hover:bg-white hover:border-black hover:text-black "><p> Cart ({state.cart.length})</p></button>
        </nav>
        <Image alt="headerImage" src={header} />
        <Marquee direction="left" loop={0} speed={180} gradientColor={[0, 0, 0]} className="border-t-2 border-b-2 p-1 text-lg overflow-hidden bg-none w-full">
          A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag
        </Marquee>
      </header>
      <section className="flex flex-col gap-4 my-2 items-center overflow-auto min-w-full p-4 sm:flex-row relative">
        {
          products.map((product, index) => {
            return (
              <CardProducts key={index} product={product} />
            )
          })
        }
      </section>
      <footer className="min-w-full">
        <Image alt="footerImage" src={footer} />
      </footer>
      {
        isShowModal ?
          (<>
            <b onClick={() => setIsShowModal(false)} className="absolute top-0 right-0 min-w-full h-full bg-black opacity-70" />
            <aside className=" p-2 absolute top-0 right-0 h-2/5 w-midum sm:w-med bg-black z-30 border-t-0 border-2 border-white  overflow-y-auto">
              <header className="flex flex-col items-end">
                <section className="cursor-pointer" onClick={() => setIsShowModal(false)}>
                  <Image src={close} alt="close" />
                </section>
                <section className="mt-2">
                  <Image src={yourCard} alt="your card" />
                </section>
              </header>
              <section className="p-2">
                {
                  state.cart.map((product, index) => {
                    return (
                      <CardAsideProduct key={index} product={product}  />
                    )
                  })
                }
                <section className="flex justify-between border-2 border-white p-2 items-center">
                  <p className="flex-1 text-2xl">{handlePrice.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                  })}</p>
                  <section className="flex-2" onClick={() => {
                    alert("Succesfully")
                    actions.setCart([])
                    setIsShowModal(false)
                  }}>
                    <Image src={check} alt="checkout" />
                  </section>

                </section>
              </section>

            </aside>
          </>) : (null)
      }
    </main>
  );
};

export default Home;
