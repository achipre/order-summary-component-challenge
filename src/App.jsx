import background from './assets/background-desktop.svg'
import hero from './assets/illustration-hero.svg'
import iconMusic from './assets/icon-music.svg'
function App() {
  return (
    <main className="bg-pale-blue h-full w-full flex justify-center items-center">
      <img className="w-full absolute top-0 z-0" src={background} alt="background" />
      <article className="min-w-[320px] sm:mx-4 z-10 bg-white rounded-3xl flex gap-5 flex-col items-center w-[450px] drop-shadow-[0_20px_25px_rgba(106,83,212,0.20)]">
        <img className="rounded-t-[20px]" src={hero} alt="Imagen Hero" />
        <div className="flex flex-col items-center px-14 mt-1">
          <h1 className="font-extrabold text-[1.75rem] mt-5 align-middle text-dark-blue">
            Order Summary
          </h1>
          <p className="text-center text-desatured-blue mt-3 leading-[1.65rem]">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
            you like!
          </p>
        </div>
        <div className="bg-neutral-blue flex items-center p-[24px] gap-5 w-[79%] rounded-xl flex-wrap">
          <img src={iconMusic} alt="Icon of Music" />
          <div className="flex-grow">
            <p className="text-dark-blue text-[16px] leading-[26px] font-extrabold my-[2px]">
              Annual Plan
            </p>
            <p className="text-desatured-blue">$59.99/year</p>
          </div>
          <p className="text-bright-blue hover:text-dark-blue cursor-pointer font-extrabold text text-sm underline">
            Change
          </p>
        </div>
        <button className="bg-bright-blue text-pale-blue my-[10px] p-[14px] text-[15px] font-extrabold rounded-xl w-[79%] drop-shadow-[0_15px_15px_rgba(106,83,212,0.40)]">
          Proceed to Payment
        </button>
        <p className="cursor-pointer text-desatured-blue mb-12 text-[15px] font-semibold">
          Cancel Order
        </p>
      </article>
    </main>
  )
}

export default App
