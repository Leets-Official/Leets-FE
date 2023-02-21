import { useState } from 'react';

const divider = 1440;
// const standard = 1180;
const defaultStandards = [819, 820, 1180, 1440];

export default function Calculator() {
  const [value, setValue] = useState(0);
  const [standards, setStadnards] = useState([]);

  const handleOnClick = () => {
    setStadnards(defaultStandards.map(standard => ((value / divider) * standard).toFixed(1)));
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', color: 'white' }}>
      <div>입력</div>
      <input
        value={value}
        style={{ background: 'white', width: '100%', height: '300px' }}
        onChange={e => setValue(Number(e.target.value))}
      />
      <button type="button" onClick={handleOnClick} style={{ background: 'white' }}>
        변환하기
      </button>
      <p>
        {divider} 기준으로 {value}(을)를 {defaultStandards.join(', ')} 비율로 환산한 값
      </p>
      <div style={{ color: 'black', width: '400px', height: '80px', background: 'white' }}>
        {`[${standards.join(', ')}]`}
      </div>
    </div>
  );
}
