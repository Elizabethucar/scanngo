import React from "react";

const Mera = () => {
  return (
    <div className="w-full bg-gray-200 mt-24 py-16 px-12 mb-0 relative">
      <div className="flex flex-col justify-center">
        <p className="text-[#06632e] uppercase font-bold text-3xl ">
          Scan´n Go
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">
          Vi förenklar din arbetsdag!
        </h1>
        <p className="text-black text-start mt-4">
          På Scan´N Go erbjuder vi ett smidigt sätt att få god, hälsosam mat
          direkt till arbetsplatsen. Våra hälsosamma matlådor tillagas med fokus
          på näring och god smak för att du ska kunna äta gott och samtidigt,få
          bra energi under hela arbetsdagen. Vi erbjuder enkel beställning och
          bekväm leverans veckovis så att du inte behöver lämna arbetsplatsen,
          dessutom har vi ingen bindningstid - du bestämmer själv hur ofta och
          länge du vill få leverans.
        </p>
        <p className="text-black text-start mb-8 mt-8">
          Är du privatperson så kan du välja din egna veckomeny, genom att välja
          den matlådan som tilltalar dig. Skicka oss ett mejl med dina uppgifter
          och vilken mat du önskar att få levererad, så fixar vi resten.
        </p>
        <p className="text-black text-start">
          Som anställd betalar du enkelt genom att scanna QR koden på kylen för
          att komma åt din matlåda. Dessutom sparar du massa pengar på att köpa
          matlådor istället för att äta lunch ute varje dag! Låt oss ta hand om
          din lunch så att du kan fokusera på jobbet.
        </p>
      </div>
    </div>
  );
};

export default Mera;
