import Link from "next/link";

export default function Home() {
  let today = new Date();
  return (
    <>
      <div className="header">
        <h1>피자</h1>
        <p>
          방문 시각(서버기준): {today.getFullYear()}년 {today.getMonth()}월
          {today.getDate()}일 {today.getHours()}시 {today.getMinutes()}분
        </p>
      </div>
      <h3>방문 링크</h3>
      <ol>
        <li>
          <Link href="/origin">피자의 기원</Link>
        </li>
        <li>
          <Link href="/recipe">피자의 레시피</Link>
        </li>
        <li>
          <Link href="/nickname">피자 애칭을 정해봅시다~</Link>
        </li>
      </ol>
    </>
  );
}
