import React, { useState } from "react";
import { SizeProps } from "../../@types/size.type";

function LightModeIcon({initialSize}: SizeProps) {
  const [size, setSize] = useState<number>(initialSize||120);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path fill="url(#pattern0)" d="M0 0H96V96H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01042)" xlinkHref="#image0_1_2"></use>
        </pattern>
        <image
          id="image0_1_2"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeUlEQVR4nO2dz2tVRxTHP0SpGmMJJdbEX2hCizvdupDutBo3imihIkgNuouCrck/IGjBnQvbajAFU3GhICiuLIK0dOeiRE38EUVo42/amgaTRgbmQSjmzpn7xnfv85wPzPLNNzn33jMzZ86cAcMwDMMwDMMwjPqlDegEeoFTwM/AIPAY+BeY8m0CeALcBK4Cff43m4DWov+JeqIJ2AKcAIanGbjaNuz7dH3PL/qfLBsNwOfAAPAqodFnak7jrNd02qrf9v3A3RoYPevLOOD/FjU0Aj3eZ0+VoP0DfI0SdgAPSmB01/7zbm8ZClgOXCmB0SttBFiPEnYBL0tg9Er7EfgQBcwBvk/0tv7k5/VuGrnarw8+ANYBY8J+3LphD0pYBPxShW++DnQDn2RodEQM5KPAWpTQAQzlMPxT4Fv/e8lM6oaw3zvCPt8LVgGPIg3/zLuXBRE6J4V9D3p3pYKOSONPAMeBjyJ1tkUsspagyOfHuJ3bOX1yq9Dv/6nJ7cyJHHD7q1j6nxP0P6ZpwCViqjnp4y552SDU+QpF7BIaZdz77rzMBn4XLrLUsFy4wh33GyPV0CXQcTGmZhRxReh2tiUYY0YEWs5FoSmqKXE9BxJo7RXonEERjcKQcn8CrVl+yhra4VIRUq7QIzD+7US7TJsFWkdQxAIfswmtcNcm0rsY0PobaEER+wVv5PFEWi6G8zqgdQxFNAg20J/liO3MRLdghqUm3IBP4wi9/YcS6l0LaF1CGQMBgzyNDClnsdCPJVl6X6CIJkHS1NGEejsFg6+bDqthi2AbMaU//iGgdx5lnAgYxO3hpmQwoOdiQ6oIJcq6GUsqmv0XlaXXjiLaBLOfrOyFWD4LaP2BMjoDBrmfWG9fQM+tjlXRGzCIS/VOybGA3mGU0RcwiHtAKbkQ0NuNMq4GDOKmqCn5LaDnxghVhKaEaxLr3QvofYoyRgMGSZ159jyg58IUqghlH89LrDdeY73SE1oUpT7oNhVo6rAHUDDmggrGBuGCsWlowdhCrGAsFFEwFowrGAtHF4xtyJQA25IsGNuULxhLS6mDxCx3yj0VXwa01CVm4Qtm1Co1scVSE/Ml5/ZSu+TcyyijjOnp7Sijlgc0Wu2AxtsH4yclOqL0l7YjSrU+pNcp0EqZFl8X1PKYagNwK6DjpsdLUUYtD2p3CXRUHdSOKVUwAWytUsdKFWQU63gheAjjwMYqH4IV65gBK1dTAspWsKkLZcSWLDttJct0FO1biTJiy1ZO5ixbuV3Y/5CmspXVFm7tiXRL0sKt7k6ZxSj8EoYjH4JrVro48Zjwa46H8P/i3Vmn79v9bUqSPlUV764wF/gu50OY3h76QiGV8vVrfKqMO6hh5euFhTdeJngQqZqaCxyms8KuMCkHO+wSn3LsJ3xTomus3Amggyikyc90QueC32W76/e5U6XT1CUNPlw94C9Ve9dGt6sMA1/FVj99vZPQ6EM+amuXeeYIvnX6UEWfT9a6+ZbrbMcyrrP9OFbUMAzDMAzDMAyDSN4ArUmXm52b75kAAAAASUVORK5CYII="
        ></image>
      </defs>
    </svg>
  );
}

export default LightModeIcon;