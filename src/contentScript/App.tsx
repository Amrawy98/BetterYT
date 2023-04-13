import { useState } from "react";
import { useIsFirstRender } from "usehooks-ts";
import getPlaylistSum from "./utils/getPlaylistSum";
import Loading from "./Components/Loading";

function App() {
  const [timeNodeList, setTimeNodeList] = useState<NodeListOf<Element>>(
    document.querySelectorAll("#asdkajsklfdjashdlfaasldfkjhasd")
  );
  const isFirst = useIsFirstRender();

  const timeElementsPath =
    "#items.playlist-items.style-scope.ytd-playlist-panel-renderer ytd-thumbnail-overlay-time-status-renderer span";

  if (isFirst) {
    setTimeout(() => {
      const elements = document.querySelectorAll(timeElementsPath);
      console.log("initial elements", elements.length);
      setTimeNodeList(elements);
    }, 1000);
  }

  const interval = setInterval(() => {
    const elements = document.querySelectorAll(timeElementsPath);
    console.log("interval elements", elements.length);
    if (timeNodeList.length === elements.length) clearInterval(interval);
    else {
      setTimeNodeList(elements);
    }
  }, 3000);
  const playListTime = getPlaylistSum(timeNodeList);
  return (
    <>
      {playListTime ? (
        <div className=" p-2 text-xl leading-4 text-youtube-font">
          - Total Time: {playListTime}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
