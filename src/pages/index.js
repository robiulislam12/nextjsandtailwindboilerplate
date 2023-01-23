import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind And Next Js App</title>
        <meta
          name="description"
          content="next js boilerplate code created by robiul islam"
        />
        <meta name="author" content="Robiul islam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline text-center hover:no-underline my-20">Home page</h1>
      </main>
    </>
  );
}
