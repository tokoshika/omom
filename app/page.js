import Image from "next/image";
import Omu from "@/public/omu.jpg";
export default function Home() {
  return (
    <div className="main-container">
      <div className="top">
        <h3>
          研修部　実技研修のご案内<span>(家庭科編)</span>
        </h3>
        <h1>「節分オム巻きを作りましょう」</h1>
        <Image
          className="image"
          width="525"
          height="100%"
          src={Omu}
          alt="節分オム"
        />
      </div>
      <div className="explanation">
        <ul className="li-container">
          <li>講師 小川芳美</li>
          <li>日時 1月31日(水)</li>
          <li>場所 家庭科室</li>
          <li>持ち物 エプロンなど</li>
          <li className="last">欠席連絡は1月26日まで　　　</li>
        </ul>
      </div>
    </div>
  );
}
