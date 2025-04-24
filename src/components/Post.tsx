import React from "react";
import {
  Card,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Ellipsis } from 'lucide-react';
import { Eye } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';



const posts = [
  {
    title: "How 7 lines code turned into a $36 Billion Empire",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg1.jpg",
  },
  {
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg2.jpg",
  },
  {
    title: "Teknion wins Gold at 2022 International Design Awards",
    field: "POLITICS",
    date: "20 Sep 2022",
    status: "Drafted",
    bgImage: "/images/card/bg3.jpg",
  },
  {
    title: "How 7 lines code turned into a $36 Billion Empire",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg4.jpg",
  },
  {
    title: "How 7 lines code turned into a $36 Billion Empire",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg5.jpg",
  },
  {
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg6.jpg",
  },
  
  {
    title: "Teknion wins Gold at 2022 International Design Awards",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg8.jpg",
  },
  {
    title: "How 7 lines code turned into a $36 Billion Empire",
    field: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    bgImage: "/images/card/bg7.jpg",
  },
];

const Post = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {posts.map((post, index) => (
    <Card key={index} className="overflow-hidden relative group sm:h-75 h:50">
 
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-70 transition-all duration-300"
        style={{ backgroundImage: `url(${post.bgImage})` }}
      />
      <div className="absolute top-2 right-2 z-20 flex gap-2">
        <Button className="w-12 h-7 p-1 text-midnight bg-white hover:bg-midnight hover:text-white">
          <Eye className="w-2 h-2 p-0" />
          <div className="text-[12px]">428</div>
        </Button>
        <Button className="w-7 h-7 p-0 text-midnight bg-white hover:bg-midnight hover:text-white">
          <ChartNoAxesCombined className="w-4 h-4" />
        </Button>
      </div>


      <div className="relative z-10 h-full flex flex-col justify-between px-4 pt-2 pb-0 text-white">
  
<div className="w-full flex items-end mt-30 ">
      <CardTitle className="text-md font-semibold">{post.title}</CardTitle>

</div>

        <div className="w-full flex justify-between items-end">
      
          <div className="flex flex-col mt-2">
            <div className="flex-row">
            <span className="text-xs text-gray-200 mx-1 mb-1 font-semibold">{post.field}</span>
            <span className="text-xs text-gray-200 mb-1">{post.date}</span>
            </div>
          
            <Button className="bg-cardbg text-midnight hover:bg-gray-400 px-2 py-1 w-25">
              View
            </Button>
          </div>

          <div className="flex flex-col items-end">
            
            <Button className={`${post.status === "Created" ? "text-xs bg-cardbg text-blue-500 mb-1" : "text-xs bg-cardbg text-green-500 mb-1"} ${post.status === "Drafted" ? "text-xs bg-cardbg text-gray-500 mb-1" : "text-xs bg-cardbg text-green-500 mb-1"} `}>{post.status}</Button>
            <Button className="bg-cardbg text-midnight hover:bg-gray-400 px-2 py-1 mt-2 w-10">
              <Ellipsis className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>

  );
};

export default Post;
