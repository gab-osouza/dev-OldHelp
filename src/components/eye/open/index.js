import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function OpenEye(props) {
    return (
        <Svg
            width={22}
            height={20}
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11 4.5a3 3 0 100 6 3 3 0 000-6zm0 8a5 5 0 110-10 5 5 0 010 10zM11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0z"
                fill="#581183"
            />
        </Svg>
    )
}


