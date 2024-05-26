import { useState } from "react";

const faqs = [
  {
    q: "What is Amazing Dealz?",
    a: "Amazing Dealz is a Telegram channel that provides exclusive deals and discounts on leading e-commerce sites.",
  },
  {
    q: "How do I join the Telegram channel?",
    a: "Simply click on the 'Join Telegram Channel' button on our website, and you'll be redirected to our channel.",
  },
  {
    q: "Are the deals updated regularly?",
    a: "Yes, we update our channel with new deals daily, so you never miss out on the latest discounts.",
  },
  {
    q: "Can I suggest deals to be posted on the channel?",
    a: "Yes, we welcome suggestions from our community members. Feel free to share any deals you come across, and we'll consider posting them on the channel.",
  },
];

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-left">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="space-y-4">
          {faqs.map((f) => (
            <Item title={f.q}>{f.a}</Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
