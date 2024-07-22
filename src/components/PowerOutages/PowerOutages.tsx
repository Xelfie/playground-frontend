import { useEffect, useState } from "react";

interface Outage {
  date: string;
  district: string;
  from: string;
  id: string;
  locality: string;
  streets: string;
  to: string;
}

const PowerOutages = () => {
  const [powerOutages, setPowerOutages] = useState({ today: [], future: [] });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.latest.json",
    )
      .then((res) => res.json())
      .then((resJSON) => {
        setPowerOutages(resJSON);
      })
      .catch((e) => console.log({ e }));
  }, []);

  return (
    <div>
      {powerOutages.today.map((outage: Outage) => (
        <div key={outage.id}>
          <span>{outage.date}</span>
        </div>
      ))}
      <br />
      {powerOutages.future.map((outage: Outage) => (
        <div key={outage.id}>
          <span>{outage.date}</span>
        </div>
      ))}
    </div>
  );
};

export default PowerOutages;
