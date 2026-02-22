'use client';

import { useState, useRef, useEffect } from 'react';
import * as S from './StatusDropdown.styled';

/* Filter icon (20×20) — Figma icon fill #152564 */
const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 4h12M4 8h8M6 12h4"
      stroke="#152564"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* Chevron icon for open/close */
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <path d="M3 5l4 4 4-4" stroke="#152564" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Option {
  value: string;
  label: string;
}

interface StatusDropdownProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const StatusDropdown = ({ value, options, onChange, placeholder = '전체 상태' }: StatusDropdownProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;

  /* Close on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Trigger $open={open} onClick={() => setOpen((prev) => !prev)} type="button">
        <FilterIcon />
        <S.TriggerText>{selectedLabel}</S.TriggerText>
        <ChevronIcon open={open} />
      </S.Trigger>

      {open && (
        <S.DropdownPanel>
          {options.map(({ value: val, label }) => (
            <S.DropdownItem key={val} $selected={val === value} onClick={() => handleSelect(val)}>
              {label}
            </S.DropdownItem>
          ))}
        </S.DropdownPanel>
      )}
    </S.Wrapper>
  );
};

export default StatusDropdown;
