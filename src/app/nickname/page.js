"use client";

import Image from "next/image";
import { useState } from "react";

export default function Nickname() {
  let [nickname, setNickname] = useState("나폴리 피자");
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/440px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
        alt="나폴리 피자"
        width={440}
        height={330}
      />
      <h3>{nickname}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNickname(e.target.changeNickname.value);
        }}
      >
        <p>
          <input
            type="text"
            name="changeNickname"
            placeholder="애칭을 적어주세요."
          />
        </p>
        <p>
          <input type="submit" value="change" />
        </p>
      </form>
    </>
  );
}
