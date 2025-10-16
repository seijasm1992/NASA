import React from "react"
import Button from "./Button"
export default function Hero() {
    return (
        <section className="text-white text-center px-6 z-10 flex flex-col justify-center mt-12 font-barlow-condensed tracking-wider">
            <div>
            <h2 className="text-xl uppercase tracking-widest mt-8">so, you want to travel to</h2>
            <h1 className="text-8xl uppercase my-4 mt-8 tracking-wider font-bellefair" >space</h1>
            <p className="text-2xl tracking-wider mt-12 text-center leading-[1.5]">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
          <div className="mt-12">
            <Button />
          </div>
        </section>

    )
}
