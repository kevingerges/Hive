import React, { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./SettingsConnectedApps.module.css";

const SettingsConnectedApps = () => {
  const router = useRouter(); 

  const onVectorIconClick = useCallback(() => {
    router.push("/HomePage");
  }, [router]);

  return (
    <div className={styles.settingsConnectedApps}>
      <div className={styles.shadow} />
      <div className={styles.integrations}>Integrations</div>
      <div className={styles.connectYourFavorite}>
        Connect your favorite tools to find anything, anywhere.
      </div>
      <div className={styles.instanceParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.connectWrapper} style={{backgroundColor: "#E0FDE0"}}> 
                <div className={styles.connect__SettingsConnectedApps__c66282c0}>
                  Connected
                </div>
              </div>
              {/* <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div> */}
            </div>
            <div className={styles.googleDrive}>Google Drive</div>
            <div className={styles.accessAllOf}>
              Access all of your documents and information.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image64Icon}
                alt=""
                src="/image-64@2x.png"
              />
              <div className={styles.connectWrapper} style={{backgroundColor: "#E0FDE0"}}> 
                <div className={styles.connect__SettingsConnectedApps__c66282c0}>
                  Connected
                </div>
              </div>
            </div>
            <div className={styles.googleDrive}>Slack</div>
            <div className={styles.accessAllOf}>
              Communicate seamlessly with your teammates.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image64Icon}
                alt=""
                src="/image-65@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Notion</div>
            <div className={styles.accessAllOf}>
              Sync all of your notes, team docs, and other important
              information.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image66Icon}
                alt=""
                src="/image-66@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Figma</div>
            <div className={styles.accessAllOf}>
              Stay up to date with your team’s latest designs.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image64Icon}
                alt=""
                src="/image-67@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Airtable</div>
            <div className={styles.accessAllOf}>
              Keep your data organized in a spreadsheet-database format.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image68Icon}
                alt=""
                src="/image-68@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Miro</div>
            <div className={styles.accessAllOf}>
              Unlock the power of collaboration to distill insights from data.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instanceContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image69Icon}
                alt=""
                src="/image-69@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Confluence</div>
            <div className={styles.accessAllOf}>
              Create content, collaborate on work, and organize and share
              information
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image68Icon}
                alt=""
                src="/image-702@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Dovetail</div>
            <div className={styles.accessAllOf}>
              Organize and tag your research in a collaborative platform.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image71Icon}
                alt=""
                src="/image-71@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Mural</div>
            <div className={styles.accessAllOf}>
              Collaborate visually to solve problems.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instanceParent1}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image72Icon}
                alt=""
                src="/image-72@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Qualtrics</div>
            <div className={styles.accessAllOf}>
              Conduct surveys, feedback, and polls.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image73Icon}
                alt=""
                src="/image-731@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>Coda</div>
            <div className={styles.accessAllOf}>
              Store team docs, spreadsheets, and building tools.
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.image64Parent}>
              <img
                className={styles.image74Icon}
                alt=""
                src="/image-74@2x.png"
              />
              <div className={styles.connectWrapper}>
                <div className={styles.connect}>Connect</div>
              </div>
            </div>
            <div className={styles.googleDrive}>User Interviews</div>
            <div className={styles.accessAllOf}>
              Recruit and manage research participants.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.integrationsNavBar}>
        <div className={styles.logo}>
          <b className={styles.hive} onClick={onVectorIconClick} >hive</b>
        </div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.settingsNavBar}>
        <div className={styles.integrations1}>Integrations</div>
        <div className={styles.billing}>Billing</div>
        <div className={styles.settingsButton}>
          <div className={styles.settings}>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsConnectedApps;
