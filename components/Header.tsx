import Link from "next/link";

export default function Header() {
  return (
    <div className="grid bg-green-200 p-1 m-5 grid-cols-2">
      <Link href="/">
        <a className="ml-5" >메인페이지</a>
      </Link>
      <Link href="/">
        <a className="mr-5">로그인</a>
      </Link>



    </div>
  );
}
