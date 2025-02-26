import Image from "next/image";

export function SettlementCard() {
  return (
    <div className="grid grid-cols-12 rounded-md border border-black p-2 gap-5">
      <div className="col-span-8 flex gap-2 bg-red-300">
        <Image src="/money.png" height={25} width={25} alt="Image" />
        BhuvBoy G. paid Soumya K. ₹1666.66
      </div>
      <div className="col-span-2 bg-blue-400 flex justify-end">You paid</div>
      <div className="col-span-2 bg-blue-600 flex justify-start">200</div>
    </div>
  );
}
