// * Component-ui
import Button from "../ui/Button";

export default function BetweenSection() {
  return (
    <div className="flex justify-between  mx-auto w-[1264px]">
      <h1 className="text-5xl text-[#522E5E]">This Week’s Lessons</h1>
      <Button bgColor="white" textColor="#281030" className="border">
        View All Highlights
      </Button>
    </div>
  );
}
