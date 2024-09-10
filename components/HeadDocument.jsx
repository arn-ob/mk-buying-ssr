import Head from "next/head"

const HeadDocument = ({ title = "Mk-Buying" }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default HeadDocument
