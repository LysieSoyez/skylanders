import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("json/SkyList.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="all_cards">
      {data.length
        ? data.map((skylanders) => (
            <>
              <div className="card">
                <div className={`${skylanders.elem} ${skylanders.jeu}`}>
                  <img src={skylanders.image} alt={skylanders.title} />
                  <h2>{skylanders.title}</h2>
                  <img src={skylanders.elemImg} />
                </div>
              </div>
            </>
          ))
        : null}
    </div>
  );
}

export default Card;
