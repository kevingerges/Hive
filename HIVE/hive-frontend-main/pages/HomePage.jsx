
import React, { useCallback, useState , useEffect} from "react";
import { useRouter } from "next/router";
import styles from "./HomePage.module.css";
import axios from "axios";
import ItemCard from "../components/itemCard";


const HomePage = () => {

  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const onVectorIconClick = useCallback(() => {
    router.push("/SettingsConnectedApps");
  }, [router]);


  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:5000/query?terms=${searchInput}`);
      const data = response.data;
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <div className={styles.homePage}>
        <div className={styles.shadow} />
        <div className={styles.integrationsNavBar}>
          <div className={styles.logo}>
            <b className={styles.hive}>hive</b>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className={styles.vectorIcon} onClick={onVectorIconClick}
            alt=""
            src="/vector1.svg"
           
          />
        </div>
        <div
          className={styles.searchBar}
        >
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector11.svg"
          />
          <div className={styles.trySearchingFor}>
            Try searching for your most recent research project
          </div>
        </div>
        <div className={styles.recommended}>
          <h4 className={styles.h4}> Recommended </h4>
        <div className={styles.itemcardcontainer} style={{
          display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap"
        }}>
        {searchResults.map((result, index) => (

          <ItemCard index={index} result={result}/>
 ))}
      </div>
        
        </div>


        <div className={styles.settingsNavBar}>
          <div className={styles.frameParent1}>
            <div className={styles.image70Parent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-121.svg"
              />
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="/ellipse-14.svg"
                />
                <img
                  className={styles.image64Icon1}
                  alt=""
                  src="/image-641@2x.png"
                />
              </div>
            </div>
            <div className={styles.image70Parent}>
              <div className={styles.frameChild}>
                {/* <img
                  className={styles.groupItem}
                  alt=""
                  src="/ellipse-16.svg"
                /> */}
                {/* <img
                  className={styles.image70Icon1}
                  alt=""
                  src="/image-70111@2x.png"
                /> */}
              </div>
              {/* <div className={styles.frameChild}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/ellipse-16.svg"
                />
                <img
                  className={styles.image67Icon}
                  alt=""
                  src="/image-671@2x.png"
                />
              </div> */}
            </div>
            <div className={styles.frameChild}>
              <img
                className={styles.groupItem}
                alt=""
                src="/ellipse-16.svg"
              />
              {/* <img
                className={styles.image65Icon}
                alt=""
                src="/image-651@2x.png"
              /> */}
            </div>
          </div>
          <div className={styles.sortBy}>Sort by</div>
          <div className={styles.tool}>Tools</div>
          <div className={styles.dateAscendingWrapper}>
            <div className={styles.dateAscending}>Date ascending</div>
          </div>
          <div className={styles.dateDescendingWrapper}>
            <div className={styles.dateAscending}>Date descending</div>
          </div>
          <div className={styles.aToZWrapper}>
            <div className={styles.dateAscending}>A to Z</div>
          </div>
          <div className={styles.zToAWrapper}>
            <div className={styles.dateAscending}>Z to A</div>
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
      <img src="/vector.svg" alt=""/>
        <form onSubmit={searchHandler}> 
        <input 
    type="text"
    placeholder="Try searching for your most recent research project" 
    value={searchInput} 
    onChange={(e)=>setSearchInput(e.target.value)} 
    style={{
        // position: 'absolute',
        top: '-1px',
        left: '0px',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--br-31xl)',
        // boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
        // border: '1px solid var(--color-silver-100)',
        border: "none",
        boxSizing: 'border-box',
        width: '891px',
        height: '58px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        // padding: 'var(--padding-3xl) var(--padding-13xl)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 'var(--gap-12xl)',
        cursor: 'pointer',
        fontSize: 'var(--font-size-xl)',
        color: 'var(--color-lightslategray)',
    }}
/>

        {/* <button>Enter</button> */}
        </form>
      
      </div>
   
    </div>
  );
};

export default HomePage;
