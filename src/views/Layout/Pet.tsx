import { useMemo, useState } from "react";
import { sound } from "@pixi/sound";
import catImageGif from "@/assets/images/cat_cursor.gif";

export const Pet = () => {
  const catSound = useMemo(() => {
    for (let i = 0; i < 6; i++) {
      const id = `cat00${i + 1}`;
      if (sound.exists(id)) continue;
      sound.add(id, {
        url: `/l2d/cat/${id}.mp3`,
        volume: 5,
        loop: false,
      });
    }
    return sound;
  }, []);

  const [playCatId, setPlayCatId] = useState("cat001");

  const handlePlayCatSounds = () => {
    catSound.stop(playCatId);
    const random = Math.floor(Math.random() * 6) + 1;
    setPlayCatId(`cat00${random}`);
    catSound.play(playCatId);
  };

  return (
    <>
      <img
        onMouseEnter={handlePlayCatSounds}
        className="w-36 hover:scale-150 origin-bottom-right transition-transform duration-300 fixed right-6 bottom-0"
        src={catImageGif}
        alt="cat"
      />
    </>
  );
};
