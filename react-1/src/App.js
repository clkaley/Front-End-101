import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/cheesecake.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Aleyna";
    const recipeItem = {
    title: "Limonlu Cheesecake",
    date: "5 Mayıs 2021, Çarşamba",
    image: food,
    description:"Kıtır nefis tabanı, ipeksi ve pürüzsüz cheesecake dokusu, hafif mi hafif limonlu sosu ile her çatalda ferahlık ve buram buram limon.. Muazzam bir lezzet! Şahane bir yaz pastası! Kusursuz! ",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
   
    <div className="App">
      <header className="App-header">
     

        <Card
          /* prop ismi = { değişken } */

          author={recipeAuthor}
          recipeTitle={recipeItem.title}
          recipeDate={recipeItem.date}
          recipeImage={recipeItem.image}
          recipeDescription={recipeItem.description}
          isLiked={isLiked}
          likeCount={likeCount} 
        
        />

  
      </header>
    </div>
  );
}

export default App;
