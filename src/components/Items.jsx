import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Items({
  category,
  setartist,
  artworks,
  artists,
  categories,
  picPosition,
  setitemInfo,
}) {
  const navigate = useNavigate();
  const [items, setItems] = useState(
    artworks.filter((i) => i.categoryId == category.id)
  );

  function clickHandler(i) {
    const foundArtist = artists.find((j) => j.id == i.artistId);

    setartist(foundArtist);
    console.log(i);
    setitemInfo(i);
    navigate("/painting");
  }

  return (

    <div className="mb-6">

      <h2 className="text-center font-bold text-2xl mt-5" id="title-categories">
        {categories && categories[picPosition].name}
      </h2>

      {categories && <p>{categories[picPosition].desc}</p> }

      <p className="text-center mt-3 mx-6 mb-2">
        Explore the best artworks of this collection below! <br />
      </p>

      <div className="items-section">

        {items.map((i) => (
            <div key={i.id} className="card" onClick={() => clickHandler(i)}>
              <img src={i.pics[0]} alt="" />
              <div>
                <h3>{i.name}</h3>

                {artists.map((e) =>
                  e.id == i.artistId ? (
                    <p key={e.id}>
                      {e.fName} {e.lName}
                    </p>
                  ) : null
                )}

                <h3>${i.price}</h3>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
