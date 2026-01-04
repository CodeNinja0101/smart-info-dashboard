const TimeCard = ({ timeData }) => {
  return (
    <div>
      <h3>Local Time</h3>
      <p>Date: {timeData.date}</p>
      <p>Time: {timeData.time}</p>
      <p>Timezone: {timeData.timeZone}</p>
    </div>
  );
};

export default TimeCard;
