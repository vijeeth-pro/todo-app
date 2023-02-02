import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Delete = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        {...props}
    >
        <Path d="M 14 4 C 12.841 4 12 4.841 12 6 L 12 7 L 6 7 L 6 9 L 7 9 L 7 25 C 7 26.654 8.346 28 10 28 L 19.771484 28 L 21.771484 26 L 10 26 C 9.449 26 9 25.552 9 25 L 9 9 L 23 9 L 23 18.671875 L 25 20.671875 L 25 9 L 26 9 L 26 7 L 20 7 L 20 6 C 20 4.841 19.159 4 18 4 L 14 4 z M 14 6 L 18 6 L 18 7 L 14 7 L 14 6 z M 11 12 L 11 23 L 13 23 L 13 12 L 11 12 z M 15 12 L 15 23 L 17 23 L 17 12 L 15 12 z M 19 12 L 19 19.472656 L 21 17.472656 L 21 12 L 19 12 z M 21.400391 19.900391 L 20 21.300781 L 24.650391 25.949219 L 20 30.599609 L 21.400391 32 L 26.050781 27.349609 L 30.599609 31.900391 L 32 30.5 L 27.449219 25.949219 L 32 21.400391 L 30.599609 20 L 26.050781 24.550781 L 21.400391 19.900391 z" />
    </Svg>
);
export default Delete;
