import { useState, useEffect } from "react";
import getPlaylistSum from "./utils/getPlaylistSum";
import Loading from "./Components/Loading";

function App() {
  const [timeNodeList, setTimeNodeList] = useState<NodeListOf<HTMLElement>>(
    document.querySelectorAll("#asdkajsklfdjashdlfaasldfkjhasd")
  );

  useEffect(() => {
    // Create the observer with a callback function
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          // The content of the observed element has changed
          const elements = document.querySelectorAll(
            "#content #items.playlist-items.style-scope.ytd-playlist-panel-renderer ytd-thumbnail-overlay-time-status-renderer span"
          ) as NodeListOf<HTMLElement>;
          setTimeNodeList(elements);
        }
      }
    });

    // Start observing changes in the target node
    const targetNode = document.getElementById("content");
    const observerConfig = { childList: true, subtree: true };
    if (targetNode) {
      observer.observe(targetNode, observerConfig);
    }

    // Remove the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  const playListTime = getPlaylistSum(timeNodeList);

  return (
    <div>
      {playListTime ? (
        <div className="w-[306px] overflow-hidden truncate py-2 text-start text-xl leading-4 text-youtube-font">
          Total Time: {playListTime}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
