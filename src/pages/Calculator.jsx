import { useState } from 'react';

const divider = 1440;
// const standard = 1180;
const defaultStandards = [820, 1180];

export default function Calculator() {
  const [value, setValue] = useState(0);
  const [standards, setStadnards] = useState([]);

  const handleOnClick = () => {
    // const rate = value / divider;
    // x / 1180 == newRate
    // const newRate = rate * standard;
    setStadnards(defaultStandards.map(standard => ((value / divider) * standard).toFixed(1)));
  };

  // const handleOnChange = e => {
  //   const num = Number(e.target.value);
  //   setValue(num);

  //   const rate = (value / divider).toFixed(2);
  //   // x / 1180 == newRate
  //   const newRate = rate * standard;
  //   setNewValue(newRate.toFixed(2));
  // };

  return (
    <div style={{ width: '100%', margin: '0 auto', color: 'white' }}>
      <div>입력</div>
      <input
        value={value}
        style={{ background: 'white', width: '100%', height: '300px' }}
        onChange={e => setValue(Number(e.target.value))}
        // onChange={e => handleOnChange(e)}
      />
      <button type="button" onClick={handleOnClick} style={{ background: 'white' }}>
        변환하기
      </button>

      {defaultStandards.map((stadard, index) => (
        <div key={index} style={{ color: 'black', width: '400px', height: '80px', background: 'white' }}>
          <p style={{ background: 'white', color: 'black' }}>
            {divider} 기준으로 {value}(을)를 {defaultStandards[index]} 비율로 환산한 값
          </p>
          <p style={{ background: 'white', color: 'blue' }}>{standards[index]}</p>
        </div>
      ))}
    </div>
  );
}
