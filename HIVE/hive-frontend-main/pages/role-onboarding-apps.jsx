import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./role-onboarding-apps.module.css";

const IntegrationsOnboarding = () => {
  const router = useRouter();
  const [connectButtonColor, setConnectButtonColor] = useState(""); 
  
  const onVectorIconClick = useCallback(() => {
    router.push("/SettingsConnectedApps");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/HomePage");
  }, [router]);

  
  const onBackContainerClick = useCallback(() => {
    router.push("/role-onboarding");
  }, [router]);

  

  const handleConnectClick = (e) => {
    const connectElement = e.target;
    const connectWrapperElement = connectElement.parentElement;
    if (connectWrapperElement) {
      if (connectElement.textContent === 'Connect') {
        connectWrapperElement.style.background = '#E0FDE0';
        connectElement.textContent = 'Connected';
      } else {
        connectWrapperElement.style.background = ''; 
        connectElement.textContent = 'Connect';
      }
    }
  };
  
  



  return (
    <div className={styles.integrationsOnboarding}>
      <div className={styles.shadow} />
      <div className={styles.integrationsNavBar}>
        <div className={styles.logo}>
          <b className={styles.hive}>hive</b>
        </div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
      </div>
      <div className={styles.connectYourFavorite}>
        Connect your favorite tools.
      </div>
      <div className={styles.progressBar}>
        <div className={styles.number}>2 of 2</div>
        <div className={styles.progressBarChild} />
        <div className={styles.progressBarItem} />
      </div>
      <div className={styles.shadowParent} onClick={onGroupContainerClick}>
        <div className={styles.shadow1} />
        <div className={styles.buttons}>
          <div className={styles.buttonprimarywithIcon}>
            <div className={styles.buttonNameParent}>
              <b className={styles.buttonName}>Finish</b>
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
      <div className={styles.shadowGroup}>
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
      <div className={styles.instanceParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image66Icon}
                alt=""
                src="/image-66@2x.png"
              />
               {/* <div className={styles.connectWrapper} onClick={handleConnectClick} style={{background: connectButtonColor}}> 
                <div className={styles.connect}>Connect</div>
              </div> */}
              <div className={styles.connectWrapper}>
  <div className={styles.connect} >Connect</div>
</div>
            </div>
            <div className={styles.figma}>Figma</div>
            <div className={styles.stayUpTo}>
              Stay up to date with your team’s latest designs.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.connectWrapper}>
  <div className={styles.connect} onClick={handleConnectClick}>Connect</div>
</div>
           
            </div>
            <div className={styles.figma}>Google Drive</div>
            <div className={styles.stayUpTo}>
              Access all of your documents and information.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image64Icon}
                alt=""
                src="/image-64@2x.png"
              />
              <div className={styles.connectWrapper}>
  <div className={styles.connect} onClick={handleConnectClick}>Connect</div>
</div>
           
            </div>
            <div className={styles.figma}>Slack</div>
            <div className={styles.stayUpTo}>
              Communicate seamlessly with your teammates.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image64Icon}
                alt=""
                src="/image-65@2x.png"
              />
                             <div className={styles.connectWrapper}>
  <div className={styles.connect} >Connect</div>
</div>
           
            </div>
            <div className={styles.figma}>Notion</div>
            <div className={styles.stayUpTo}>
              Sync all of your notes, team docs, and other important
              information.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image68Icon}
                alt=""
                src="/image-68@2x.png"
              />
               {/* <div className={styles.connectWrapper} onClick={handleConnectClick} style={{background: connectButtonColor}}> 
                <div className={styles.connect}>Connect</div>
              </div> */}
                            <div className={styles.connectWrapper}>
  <div className={styles.connect} >Connect</div>
</div>
           
            </div>
            <div className={styles.figma}>Miro</div>
            <div className={styles.stayUpTo}>
              Unlock the power of collaboration to distill insights from data.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image64Icon}
                alt=""
                src="/image-67@2x.png"
              />
                            <div className={styles.connectWrapper}>
  <div className={styles.connect}>Connect</div>
</div>
           
            </div>
            <div className={styles.figma}>Airtable</div>
            <div className={styles.stayUpTo}>
              Keep your data organized in a spreadsheet-database format.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image69Icon}
                alt=""
                src="/image-69@2x.png"
              />
                           <div className={styles.connectWrapper}>
  <div className={styles.connect} >Connect</div>
</div>
           
            </div>
            <div className={styles.figma}>Confluence</div>
            <div className={styles.stayUpTo}>
              Create content, collaborate on work, and organize and share
              information
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image66Parent}>
              <img
                className={styles.image68Icon}
                alt=""
                src="/image-702@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.figma}>Dovetail</div>
            <div className={styles.stayUpTo}>
              Organize and tag your research in a collaborative platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsOnboarding;
