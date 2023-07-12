import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const LandingPage40 = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/role-onboarding");
  }, [router]);

  return (
    <div className={styles.landingPage40}>
      <div className={styles.shadow} />
      <img className={styles.landingPage40Child} alt="" src="/vector-10.svg" />
      <img className={styles.landingPage40Child1} alt="" src="/vector-10.svg" />
      <div className={styles.shadowParent} onClick={onGroupContainerClick}>
        <div className={styles.shadow1} />
        <div className={styles.buttons}>
          <div className={styles.buttonprimarywithIcon}>
            <div className={styles.buttonNameParent}>
              <b className={styles.buttonName}>Try a demo</b>
              <div className={styles.icon}>
                <img
                  className={styles.iconoutlinearrowRight}
                  alt=""
                  src="/iconoutlinearrowright1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.superchargeYourTeamsProducParent}>
        <b className={styles.superchargeYourTeams}>
          Search for anything across everything
        </b>
        <div className={styles.stayOnTop}>
          Stay on top of all of your team’s docs, messages, and resources.
        </div>
      </div>
      <div className={styles.homePageNavBar}>
        <div className={styles.logo}>
          <b className={styles.hive}>hive</b>
        </div>
        <div className={styles.logintryItOut}>
          <div className={styles.login}>Login</div>
          <div className={styles.buttonprimarywithIcon1}>
            <div className={styles.buttonNameParent}>
              <b className={styles.buttonName}>Try it out</b>
              <div className={styles.icon1}>
                <img
                  className={styles.iconoutlinearrowRight}
                  alt=""
                  src="/iconoutlinearrowright11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image76Parent}>
          <img className={styles.image76Icon} alt="" src="/image-76@2x.png" />
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.image70Parent}>
          <img className={styles.image70Icon} alt="" src="/image-701@2x.png" />
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.whatsTheMost}>
            what’s the most recent research on user onboarding?
          </div>
        </div>
        <div className={styles.image73Parent}>
          <img className={styles.image73Icon} alt="" src="/image-73@2x.png" />
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
          <div className={styles.frameInner} />
        </div>
        <img className={styles.frameIcon} alt="" src="/frame-17.svg" />
      </div>
    </div>
  );
};

export default LandingPage40;
