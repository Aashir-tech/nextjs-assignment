import React from "react";
import { CalendarDays, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end w-full px-4 mt-2">
      <div className="flex items-center gap-2">
        <Button className="bg-lightpurple hover:bg-lightpurple/80">
          <CalendarDays color="#1C1442" />
        </Button>
        <Button className="bg-lightpurple hover:bg-lightpurple/80">
          <ListFilter color="#1C1442" />
        </Button>
      </div>

      <Button className="bg-midnight hover:bg-midnight/70 text-white font-semibold w-full sm:w-auto">
        Add New Story
      </Button>
    </div>
  );
};

export default Navbar;
