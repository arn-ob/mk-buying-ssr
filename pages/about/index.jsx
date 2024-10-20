import Link from "next/link"
import { useContext } from "react"

import HeadDocument from "../../components/HeadDocument"
import Promo from "../../components/Promo"
import HeroImage from "../../components/HeroImage"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import CartQtyContext from "../../context/CartQty"

export default function About() {

    const { cartQty } = useContext(CartQtyContext)

    return (
        <>
            <HeadDocument title="Mk-Buying" />

            <header className="h-screen flex flex-col isolate">

                <Promo />
                <Navbar quantity={cartQty} />

                <section className="grow">
                    <div className="w-[90%] mx-auto max-w-[1026px] h-full flex items-center relative overflow-hidden">
                        <div className="w-fit mb-32 z-20">
                            <h1 className="text-5xl max-w-[13ch] font-extrabold tracking-tight">
                                About Us
                            </h1>
                            <p className="max-w-md mt-4 text-gray-600">
                            Our aim is to ensure fashion and quality at the best prices in a sustainable way.Our primary objective is to make fashion accessible to everyone.  At the same time, we will strive to build a more welcoming, inclusive and sustainable industry guided by our values ​​in the future.
                            </p>
                            <Link
                                href="/products"
                                className="bg-violet-600 rounded px-6 py-3 hover:bg-violet-700 transition-all text-white text-sm mt-6 block w-fit "
                            >
                                Visit Products
                            </Link>
                        </div>
                        <HeroImage />
                    </div>
                </section>
            </header>

            <Footer />
        </>
    )
}