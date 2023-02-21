const divider = 1440;
const standards = [820, 1180];

const calculator = value => {
  const newValues = standards.map(standard => ((value / divider) * standard).toFixed(1));
  console.log(`${divider} 기준의 입력값: ${value}`);
  newValues.forEach((newValue, index) => {
    console.log(`${standards[index]} 기준: ${newValue}`);
  });
};

calculator(96);
