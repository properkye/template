import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="py-4 px-10 flex gap-10">
        <Link href={"/login"}>
          <button className="border border-black px-8 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-[white] ">
            Login
          </button>
        </Link>

        <Link href={"/admin"}>
          <button className="border border-black px-8 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-[white] ">
              Admin Dashboard
          </button>
        </Link>

        <Link href={"/addProduct"}>
          <button className="border border-black px-8 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-[white] ">
              Add Product
          </button>
        </Link>

        <Link href={"/contactForm"}>
          <button className="border border-black px-8 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-[white] ">
              Contact Form - nodemailer / api
          </button>
        </Link>
      </div>
    </div>
  );
}
