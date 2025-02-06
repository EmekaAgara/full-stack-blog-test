import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Abimbola Frankline</span>
        <span className="text-sm text-gray-500">3 Days ago</span>
      </div>
      <div className="mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.Lorem Ipsum is simply dummy text
      </div>
    </div>
  );
};

export default Comment;
