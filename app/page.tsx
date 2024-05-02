"use client";

import Makeover from "./_components/Makeover";

export default function Home() {
  return (
    <main className="flex min-h-max h-full flex-col items-center justify-between px-40 top-container transition">
      <div className="background-image"></div>
      <Makeover />
      {/* <section className="h-96 flex justify-center items-center">
        Hellooo
      </section>
      <section className="h-96 flex justify-center items-center">
        Hellooo
      </section>
      <section className="h-96 flex justify-center items-center">
        Hellooo
      </section>
      <section className="h-96 flex justify-center items-center">
        Hellooo
      </section>
      <section className="h-96 flex justify-center items-center">
        Hellooo
      </section> */}
    </main>
  );
}
