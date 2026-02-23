import SearchBarImage from '@/public/assets/image/Admin/SearchBarImage.svg';
import { SearchInput } from '@/types';
import * as S from './SearchBar.styled';

const SearchBar = ({ value, onChangeHandler }: SearchInput) => (
  <S.SearchBarContainer>
    <S.SearchBarImageContainer>
      <SearchBarImage />
    </S.SearchBarImageContainer>
    <S.SearchInput type="text" value={value} onChange={onChangeHandler} placeholder="이름 검색" />
  </S.SearchBarContainer>
);

export default SearchBar;
