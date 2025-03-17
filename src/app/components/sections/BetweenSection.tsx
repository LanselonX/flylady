// * Component-ui
import Button from "../ui/Button";

export default function BetweenSection() {
  return (
    <div className="flex justify-between px-36 mx-auto w-auto my-15">
      <h1 className="text-5xl text-[#522E5E] hide-on-small">
        This Week’s Lessons
      </h1>
      <Button bgColor="white" textColor="#281030" className="border">
        View All Highlights
      </Button>
    </div>
  );
}
