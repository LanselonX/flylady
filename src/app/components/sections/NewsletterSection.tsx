// * Component-ui
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function NewsletterSection() {
  return (
    <div className="flex items-center justify-center mb-24">
      <div className="bg-[#DEA5FF] w-[1264px] h-[383px] flex flex-col items-center justify-center rounded-xl">
        <div className="text-center mb-8">
          <p className="text-sm text-[#281030]">Want to learn more?</p>
          <h1 className="text-6xl text-[#281030]">
            Join hundreds of thousands of FlyBabies getting weekly tips for a
            cleaner, stress-free home.
          </h1>
        </div>
        <div className="flex space-x-4">
          <Input placeholder="Email" className="!w-[440px]" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
