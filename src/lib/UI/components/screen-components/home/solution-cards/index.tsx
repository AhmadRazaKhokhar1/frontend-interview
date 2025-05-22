export default function SolutionCards() {
  return (
    <div className="px-6 md:px-16 py-12 grid md:grid-cols-3 gap-6">
      <div className="bg-[#1536478e] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">
          Expertly crafted solutions with global reach
        </h3>
        <p className="text-gray-300 mb-4">
          Our procurement and supply chain processes enhance operations for your
          organization's success.
        </p>
        <a
          href="#"
          className="text-orange-400 font-semibold"
        >
          Let's Co-Create »
        </a>
      </div>

      <div className="bg-[#1536478e] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">
          Strategic, connected, and driven
        </h3>
        <p className="text-gray-300 mb-4">
          We leverage innovative strategies and edge tech to streamline
          procurement.
        </p>
        <span className="text-orange-400 font-semibold">
          Business Process Outsourcing »
        </span>
      </div>

      <div className="bg-[#1536478e] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">
          Fresh perspective for continuous transformation
        </h3>
        <p className="text-gray-300 mb-4">
          Expert teams to develop groundbreaking solutions — we can do it even
          better.
        </p>
        <span className="text-orange-400 font-semibold">
          Direct Procurement »
        </span>
      </div>
    </div>
  );
}
