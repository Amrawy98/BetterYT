import moment, { Moment } from "moment";

function formatDuration(duration: moment.Duration): string {
  if (duration.asMilliseconds() === 0) {
    return "";
  }
  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.hours()) + days * 24;
  const minutes = Math.floor(duration.minutes());
  const seconds = Math.floor(duration.seconds());

  const formattedDuration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedDuration;
}

function getVideoTime(first: number, second: number, third: number) {
  const totalSeconds = third
    ? first * 3600 + second * 60 + third
    : first * 60 + second;

  return totalSeconds;
}

function getPlaylistSum(timeNodeList: NodeListOf<Element>): string {
  const timeElements: Array<HTMLElement> = Array.from(
    timeNodeList
  ) as Array<HTMLElement>;
  const totalSeconds = timeElements.reduce((acc, el, index) => {
    const [first, second, third] = el.innerText.split(":").map(Number);
    return acc + getVideoTime(first, second, third);
  }, 0);
  const totalDuration = moment.duration(totalSeconds, "seconds");
  // format the duration in the desired format
  const formattedDuration = formatDuration(totalDuration);
  return formattedDuration;
}

export default getPlaylistSum;
