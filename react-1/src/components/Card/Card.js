import React from "react";
import "./Card.css";
import food from "../../assets/cheesecake.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image
/*Card component'i içerisindeki placeholder text olarak verilen yerlerin props olarak alacak şekilde dinamik hale getiriniz. Sonrasında gerekli yerleri App.js içerisinden prop olarak geçerek render edilmesini sağlayınız.

Not
Şu anda food image Card component'i içerisinde import edilerek görüntülenmektedir. Food adlı image'ın da prop olarak geleceği şekilde düzenleyiniz.
Örnek olması açısından author prop olarak geçilmiştir. Card component'inde profile adlı <div> içerisindeki <span> author prop'unun ilk harfini alacak şekilde render edilmiştir.*/
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.recipeTitle}</h5>
          <div className="card-date">{props.recipeDate}</div>
        </div>
      </div>
      <img className="card-image"  src={props.recipeImage} alt="Logo" />
      <div className="card-text">{props.recipeDescription}</div>
      <div className="card-like-bar">
        {props.isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
