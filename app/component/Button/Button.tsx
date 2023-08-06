import * as S from './Button.styled';

export default function Button({ color }) {
  const handleClick = (e) => {
    // e.preventDefault();
    // alert('지원 기간이 아닙니다.');
  };

  return (
    <S.Container>
      <S.ApplyButton href="/apply" color={color} onClick={handleClick}>
        지원하기
      </S.ApplyButton>
    </S.Container>
  );
}