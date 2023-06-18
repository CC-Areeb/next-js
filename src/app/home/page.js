"use client"

import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  const upCount = () => {
    setCount(count + 1);
  }

  const downCount = () => {
    setCount(count - 1);
  }

  const info = (myData) => {
    return setData(myData);
  }

  const InnerComponent = () => {
    return (
      <>
        <h1 className="text-3xl">
          This is an another component!
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="m-8">
        <h1 className="text-3xl">Random click event</h1>
        <br />
        <Button
          value='Click to add'
          customClass="bg-gray-500 p-2 rounded-lg text-white"
          onClick={upCount}
        />

        <br />
        <br />

        <Button
          value='Click to subtract'
          customClass="bg-gray-500 p-2 rounded-lg text-white"
          onClick={downCount}
        />

        <br />
        <br />

        <Button
          value='Click for my data!'
          customClass="bg-gray-500 p-2 rounded-lg text-white"
          onClick={() => info('This is my data!')}
        />
      </div>

      {/* Displaying the output here */}
      <div className="m-8 text-3xl">
        {count}
        <br /><br />
        {data}
        <br /><br />
        <InnerComponent />
      </div>
    </>
  )
}

