import Link from "next/link";
import Button from "../ui/Button";

export default function BetweenSection() {
  return (
    <div className="flex items-center justify-center mb-8 lg:hidden">
      <Link href="/blog#Blog">
        <Button bgColor="white" textColor="#281030" className="border">
          View All Highlights
        </Button>
      </Link>
    </div>
  );
}
