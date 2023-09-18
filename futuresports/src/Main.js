import React from 'react';
import './App.css';  // Assuming you have a separate CSS file

const HomeSection = () => {
  return (
    <section id="home">
      <div className="content">
        <h2>About Us</h2>
        <div className="search-container">
          <input type="text" id="search-input" placeholder="Search..." />
          <button id="search-button">Search</button>
        </div>
        <div id="search-results">
          {/* Search results */}
        </div>
        {/* JavaScript functionality should be handled within React */}
        {<div>
      <p>cho' HIj bo'DIjwI'. lo'pa' SoQ jormoHba' ramjep. DenIbya' QatlhmeylIj HupqangneS HIch. puqloD ngIp tel. wot nIS lengwI'na'. jagh nuQ Huch. bIt. tIH muv romuluS. maSwov'a'Daq yong nIQ. rojmab <br />
                'aw'qangmoHneS romvetlh. lo'laHghach naj naH. DenIbya' Qatlh QIjmoHlaw' Duj. tlhIl boS rom. bel rup qIbHeS. ngav tet wa'leSHey. nInej. jagh lIj Huy'. loS. jIH Sop bIQ'a'. HeH Qap DaSvo'.<br />
                mojaq ngor chal. neghvaD nop mu'ghom. jIp ghoS Soghmo'. chunDab ngeHlu' naDqa'ghach. tut QoD vaS. woQ Daj HotlhwI'. ghojlaH. tulmoHtaHchugh yopwaH qonbeHlu'taH peQ. Surchem quchchoH moQma'vaD. chach QaHpu' qeS. <br />
                ghum nuQvIpmoHchu'neS wIv. naDev jach QI'tu''a'ma'. puqbe' taghmoH jey. yuQjIjDIvI' qI' pong. QuD lIng logh. peQpu' pIH nIH. totlh nojneS De'. ghop luqIH. yev. ghoD'eghchoHta'.<br />
                lIngwI' qoplaH qul. lI'uHchuqchoH vavnI'. tana' Har. mu'tay' wIvuQbeH. chetvI''e' chIp lur. ta' luj DIvI'may'Duj. loD Qotlh HoSHey. latlh bagh wo'pu'na'. ngoj qoq. rom pIchbeH mIch'a'Du'. pong ghajlaHlaw' mang. nImbuS wej yuv <br />
                toDuj. tIv. jonwI''e' QaH. pIvlob Suv. legh. leH tungHa' jIb. mut luj. latlh Sep HIchDal. requch.<br />
                puqloD'a' ghor. wIch wIleghmoHlaH. latlh yoDlaw'neS Hal. ghov. la''a' Qol nuch. chuvmey ghajchoH Du'. Dom 'Ip yay. wa'Hu' mughvIpqa'ta' qach. choS lurghvaD. pIqaD QIH Dargh. QIch cha'lu'law' QumpIn. DIng pemjep. jInmol vIQuS.<br />
                HoSchem SoD 'utlh. chunDab vantaH be'qoq. lo' law'Du' paw' teblaw'. ra'wI' 'ovmoH vuD</p>
      
    </div>}
        <div className="carousel-container">
          <div className="carousel">
            <img src="Images/image1.jpg" alt="Image 1" />
            <img src="Images/image2.jpg" alt="Image 2" />
            <img src="Images/image3.jpg" alt="Image 3" />
          </div>
          <button className="prev-btn">&#10094;</button>
          <button className="next-btn">&#10095;</button>
        </div>
        {/* Add React-based carousel functionality */}
      </div>
    </section>
  );
};

export default HomeSection;