import Image from "next/image"

const QRCode = () => {
  return (
    <div className="bg-accent p-3 rounded-lg inline-block">
      <div className="bg-white p-2 rounded">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Scansiona per maggiori informazioni"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </div>
      <p className="text-center text-black font-medium text-sm mt-2">Scansiona per info</p>
    </div>
  )
}

export default QRCode
