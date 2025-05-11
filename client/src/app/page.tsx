import shopCard from "@/components/shopcard/shopCard";
import ShopCardSection from "@/components/shopcard/shopCardSection";
import Startshop from "@/components/startshop/startshop";
import Image from "next/image";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget"; // <-- Add this import

export default function Home() {
  return (
    <main className="container pt-10">
      <div>
        <Startshop />
        <div className="mt-10 text-xl font-medium"> Latest Campaigns</div>
        <ShopCardSection />
      </div>
      2{/* Add chatbot to bottom-right */}
      {/* <ChatbotWidget /> */}
    </main>
  );
}
