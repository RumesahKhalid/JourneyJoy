import "./searchItem.css";
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {

  const navigate = useNavigate();

  return (
    <div>
      {/* First SearchItem */}
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Envoy Continental Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>10</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$114</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Second SearchItem */}
      <div className="searchItem">
      <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/406954759.jpg?k=4d64c35225c3711119c5ef735a691fc424ec61397b7a62f9fba0bb1e44b5d148&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Reina Boutique Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$125</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Third SearchItem */}
      <div className="searchItem">
      <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Atlas hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.5</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$130</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Fourth SearchItem */}
      <div className="searchItem">
      <img
          src="https://www.savills.co.uk/_images/adobestock-539646437.jpg"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Serena Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.3</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$120</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Fifth SearchItem */}
      <div className="searchItem">
      <img
          src="https://assets.graydientcreative.com/files/outlets/platinum/images/marquis-3-min.jpg"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Hotel Margala</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.8</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$130</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Sixth SearchItem */}
      <div className="searchItem">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpvrNsF3HovN1wJT3K8WSqbPCBH9CRkoOxQ&usqp=CAU"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Hotel Crown Plaza</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.5</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$135</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Seventh SearchItem */}
      <div className="searchItem">
      <img
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Beach Luxury Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.1</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
      {/* Eighth SearchItem */}
      <div className="searchItem">
      <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Shelton Guest</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.3</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={() => navigate("/")}>See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
