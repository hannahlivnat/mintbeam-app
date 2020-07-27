import React, { useEffect, useRef } from "react";

class Footer extends React.Component {
    render = () => {
        return (
            <footer>
                <p>
                    Inspired by{" "}
                    <a href="https://github.com/zackmckenna/tutorial-27">
                        Zach Mckenna's Tutorial
                    </a>
                </p>
            </footer>
        );
    };
}

export default Footer;
