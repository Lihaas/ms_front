import styles from "../../StyleSheets/Test Page/testpage.module.css";
import Questions from "./Questions";
import Rules from "./Rules";
import Palette from "./Palette";
import Button from "./buttton";
import Review from "./Review";
import TestContext, { TestPanel } from "../../Store/testPageContext";
import { useContext, useState } from "react";
const TestPage = () => {
  const palleteHandler = () =>{
    if(document.getElementById("phonePallete").style.right === "60px"){
      document.getElementById("phonePallete").style.right = "-230px"
    }else{
      document.getElementById("phonePallete").style.right = "60px"
    }
  }
  return (
    <>
    <div className={styles.TestPage} id="testPage">
      {/* <TestPanel> */}
        <div className={styles["test-name-one"]}><h1>{localStorage.getItem("examName")}</h1></div>
        <section className={styles["section-wrapper"]}>
          <div className={styles["section-1"]}>
              <Questions />
            <div className={styles["section-1-button"]}>
              <Button />
            </div>
          </div>
          <div className={styles["section-2"]}>
            <Rules />
            <Palette />
          </div>
          <div className={styles["phone-pallete"]} id="phonePallete">
            <button
                onClick={palleteHandler}
              className={styles["pallete-button"]}
            >
              Pallete
            </button>
            <div 
            className={styles["pallete-hover-box"]} 
            id="pallete-hover">
              <Rules />
              <Palette />
            </div>
          </div>
          <div>
            <Review />
          </div>
        </section>
      {/* </TestPanel> */}
    </div>
    </>
  );
};

export default TestPage;
