import Link from "next/link";

function MainSelectMenu() {
  return (
    <div className="flex xs:flex-col md:flex-row items-center mt-5 m-5 p-1 bg-yellow-200">
      <Link href="/TravelRecommendation">
        <a className="xs:mt-3">여행 경로 추천</a>
      </Link>
      <input
        type="text"
        className="border border-transparent bg-gray-200 rounded sm:mt-3"
        value="여행지를 검색해요"
      />
      <Link href="/TravelRegistration">
        <a className="xs:mt-3 mb-3">내가 갔던 여행 경로 등록</a>
      </Link>
    </div>
  );
}

export default MainSelectMenu;
