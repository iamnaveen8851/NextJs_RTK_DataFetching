"use client";

import { fetchData } from "@/redux/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-[26px] text-center ">Dashboard</h1>
      </div>

      <div className="border-[1px] border-solid border-black p-4 grid grid-cols-3 justify-around items-center gap-4 w-[90vw] m-auto">
        {data.map((product) => (
          <div
            key={product.id}
            className="border-[1px] border-solid border-red-500 p-4 rounded-md"
          >
            <h1 className="font-semibold"> Title: {product.title}</h1>
            <p> description: {product.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
