import { useState } from "react";
import { useIsFirstRender } from "usehooks-ts";
import getPlaylistSum from "./utils/getPlaylistSum";
import Loading from "./Components/Loading";

function App() {
  // TODO: update manifest to run content script when page is loaded check:
  // * https://html.spec.whatwg.org/#dom-document-readystate
  // * https://developer.chrome.com/docs/extensions/mv2/content_scripts/
  const [timeNodeList, setTimeNodeList] = useState<NodeListOf<HTMLElement>>(
    document.querySelectorAll("#asdkajsklfdjashdlfaasldfkjhasd")
  );
  const isFirst = useIsFirstRender();

  const timeElementsPath =
    "#content #items.playlist-items.style-scope.ytd-playlist-panel-renderer ytd-thumbnail-overlay-time-status-renderer span";

  if (isFirst) {
    setTimeout(() => {
      const elements = document.querySelectorAll(
        timeElementsPath
      ) as NodeListOf<HTMLElement>;
      setTimeNodeList(elements);
    }, 1000);
  }

  const interval = setInterval(() => {
    const elements = document.querySelectorAll(
      timeElementsPath
    ) as NodeListOf<HTMLElement>;
    if (timeNodeList.length === elements.length) clearInterval(interval);
    else {
      setTimeNodeList(elements);
    }
  }, 3000);
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
