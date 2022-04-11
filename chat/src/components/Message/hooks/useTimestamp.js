import { useEffect, useState } from "react";
import moment from "moment";

export const useTimestamp = (timestamp) => {
  const [timeAgo, setTimeAgo] = useState(timestamp ? "" : "just now");

  useEffect(() => {
    if (timestamp) {
      const intervalTime = setInterval(() => {
        setTimeAgo(moment(timestamp).fromNow());
      }, 1000);

      return () => clearInterval(intervalTime);
    }
  }, [timeAgo, timestamp]);

  return timeAgo;
};
