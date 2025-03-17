// * Component-ui
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function NewsletterSection() {
  return (
    <div className="flex items-center justify-center mb-24">
      <div className="bg-[#DEA5FF] mx-auto max-w-7xl w-full h-auto flex flex-col items-center justify-center rounded-xl p-12">
        <div className="text-center mb-8">
          <p className="text-sm text-[#281030]">Want to learn more?</p>
          <h1 className="text-5xl sm:text-6xl text-[#281030]">
            Join hundreds of thousands of FlyBabies getting weekly tips for a
            cleaner, stress-free home.
          </h1>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row sm:px-82 space-x-4 w-full">
          <Input placeholder="Email" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
