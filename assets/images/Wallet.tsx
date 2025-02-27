import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Wallet(props: any) {
  return (
    <Svg
      width="50"
      height="30"
      viewBox="0 0 15 30"
      fill="currentColor"
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.5 7.33333V18C1.5 18.7072 1.78095 19.3855 2.28105 19.8856C2.78115 20.3857 3.45942 20.6667 4.16667 20.6667H12.1667M1.5 7.33333V4.66667C1.5 3.95942 1.78095 3.28115 2.28105 2.78105C2.78115 2.28095 3.45942 2 4.16667 2H22.8333C23.5406 2 24.2189 2.28095 24.719 2.78105C25.219 3.28115 25.5 3.95942 25.5 4.66667V7.33333M1.5 7.33333H25.5M25.5 7.33333V11.3333M6.83333 12.6667H13.5M21.5 15.3333V19.3333M21.5 19.3333V23.3333M21.5 19.3333H17.5M21.5 19.3333H25.5"
        stroke="#EF7D00"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="currentColor"
      />
    </Svg>
  );
}
