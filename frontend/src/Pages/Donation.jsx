import UPI from "../Components/Assets/UPI.jpg";

function Donation() {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-0 pt-16 justify-center items-center">
      <h1 className="text-violet-700 text-4xl font-bold mb-8">SCAN HERE!!!</h1>
      <div className="mt-5 flex justify-center items-center h-4/5 p-1 border-2 border-gray-200 rounded-lg w-1/4 shadow-xl">
        <img src={UPI} alt="UPI QR Code" className="h-full w-full rounded-lg border border-gray-200 object-contain" />
      </div>
    </div>
  );
}

export default Donation;