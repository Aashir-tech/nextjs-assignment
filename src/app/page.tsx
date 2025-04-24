import Navbar from "@/components/Navbar";
import Search from "../components/Search";
import { Button } from "@/components/ui/button";
import Post from "@/components/Post";

export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 px-4">
        <Search />
        <Navbar />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start px-4">
        <Button className="min-w-[120px]">All (4,500)</Button>

        <Button className="bg-lightpurple hover:bg-lightpurple/70 font-semibold text-midnight min-w-[120px]">
          Draft <span className="text-gray-500 ml-1">(1,203)</span>
        </Button>

        <Button className="bg-lightpurple hover:bg-lightpurple/70 font-semibold text-midnight min-w-[120px]">
          Pending <span className="text-gray-500 ml-1">(890)</span>
        </Button>

        <Button className="bg-lightpurple hover:bg-lightpurple/70 font-semibold text-midnight min-w-[120px]">
          Published <span className="text-gray-500 ml-1">(2,432)</span>
        </Button>

        <Button className="bg-lightpurple hover:bg-lightpurple/70 font-semibold text-midnight min-w-[120px]">
          Archived <span className="text-gray-500 ml-1">(320)</span>
        </Button>
      </div>

      <Post />
    </>
  );
}
