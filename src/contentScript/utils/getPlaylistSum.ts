import { Duration } from "../Types/Duration";

function getTotalDurationString(timeNodeList: NodeListOf<HTMLElement>): string {
  const totalSeconds = Array.from(timeNodeList).reduce((acc, el) => {
    const {
      0: first = 0,
      1: second = 0,
      2: third,
    } = el.innerText.split(":").map(Number);
    return (
      acc + (third ? first * 3600 + second * 60 + third : first * 60 + second)
    );
  }, 0);
  if (totalSeconds === 0) return "";
  const totalDuration: Duration = {
    days: Math.floor(totalSeconds / (3600 * 24)),
    hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };

  const formattedDuration = `${(totalDuration.hours + totalDuration.days * 24)
    .toString()
    .padStart(2, "0")}h ${totalDuration.minutes
    .toString()
    .padStart(2, "0")}m ${totalDuration.seconds.toString().padStart(2, "0")}s`;

  return formattedDuration;
}

export default getTotalDurationString;
