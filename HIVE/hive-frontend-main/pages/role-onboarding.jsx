import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./role-onboarding.module.css";
import React, { useCallback, useState , useEffect} from "react";
import { useRouter } from "next/router";
import axios from "axios";

const RoleOnboarding = () => {
  const router = useRouter();
  const [property1, setProperty1] = useState(""); // State to keep track of the property value

  const onVectorIconClick = useCallback(() => {
    router.push("/SettingsConnectedApps");
  }, [router]);

  const onContinueContainerClick = useCallback(async () => {
    router.push("/role-onboarding-apps");
    console.log("hello world");
    try {
      const response = await axios.post("http://127.0.0.1:5000/sync"); 
      const data = response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);
   

  const onBackContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBiclipboard2DataFillClick = useCallback(() => {
    setProperty1("Property 1=Variant2");
  }, []);

  const [selected, setSelected] = useState({})



  return (
    <div className={styles.roleOnboarding}>
      <div className={styles.shadow} />
      <div className={styles.integrationsNavBar}>
        <div className={styles.logo}>
          <b className={styles.hive}>hive</b>
        </div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
      </div>
      <div className={styles.whatKindOf}>What kind of work do you do?</div>
      <div className={styles.progressBar}>
        <div className={styles.number}>1 of 2</div>
        <div className={styles.progressBarChild} />
        <div className={styles.progressBarItem} />
      </div>
<div className={styles.fieldwrapper}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon1} alt="" src="/pm_final.svg" />
        <div className={styles.productManagement}>Product management</div>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <div className={styles.productManagement}>Design</div>
      </div>
      <div
        className={styles.biclipboard2DataFillParent}
        onClick={() => {
          if(selected === "research") {
            setSelected('')
          }else{
            setSelected('research')
          }
          onBiclipboard2DataFillClick()
        }}
      >
        {selected === "research" && <img
          className={styles.check}
          alt=""
          src="/check.png"
        />}
        <img
          className={styles.biclipboard2DataFillIcon}
          alt=""
          src="/biclipboard2datafill.svg"
        />
        <div className={styles.productManagement}>Research</div>
      </div>
      <div className={styles.vectorContainer}>
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <div className={styles.productManagement}>Development</div>
      </div>
      </div>
      <div className={styles.continue} onClick={onContinueContainerClick} >
        <div className={styles.shadow1} />
        <div className={styles.buttons}>
          <div className={styles.buttonprimarywithIcon}>
            <div className={styles.buttonNameParent}>
              <b className={styles.buttonName}>Continue</b>
              <div className={styles.icon}>
                <img
                  className={styles.iconoutlinearrowRight}
                  alt=""
                  src="/iconoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.shadow1} />
        <div className={styles.buttons}>
          <div className={styles.buttonprimarywithIcon1}>
            <div className={styles.buttonNameParent}>
              <b className={styles.buttonName} onClick={onBackContainerClick}>Back</b>
              <div className={styles.icon}>
                <img
                  className={styles.iconoutlinearrowRight}
                  alt=""
                  src="/iconoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleOnboarding;
