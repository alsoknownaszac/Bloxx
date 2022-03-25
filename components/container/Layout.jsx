import React, { useEffect, useState } from "react";
import NavBar from "../navigation/NavBar";
import SideNav from "../navigation/SideNav";
import "./styles.css";
import {
  ErrorPage,
  LoadingAnimation,
  PageLoading,
} from "../animation/Animation";

export default function Layout(props) {
  function Countdown({ seconds }) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    return <div>{timeLeft}s</div>;
  }

  const WaitingScreen = () => {
    if (props.isError) {
      return <div>error..</div>;
    }
    if (props.isLoading) {
      return <PageLoading />;
    }
    if (props.dataCondition) {
      return props.children;
    }
  };

  return <div className={`w-[100vw] h-[100vh] `}>{WaitingScreen()}</div>;
}

Layout.NoSideContent = (props) => (
  <div className={props.containerStyle}>{props.children}</div>
);

Layout.Content = (props) => (
  <div className={`main-content-container  ${props.containerStyle}`}>
    <NavBar />
    <div className="main-content md:pl-[100px] w-[100vw] content-ls ">
      <SideNav /> {props.children}
    </div>
  </div>
);
