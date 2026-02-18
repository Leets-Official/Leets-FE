'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { colors, typography, shadows } from '@/styles/theme';
import { saveProfile, getPresignedUrl } from '@/api';
import { MANAGE } from '@/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 40px;

  @media (max-width: 820px) {
    padding-top: 30px;
    align-items: flex-start;
    gap: 30px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BackButton = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  color: ${colors.blue[500]};

  @media (max-width: 820px) {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  letter-spacing: -0.96px;
  color: ${colors.blue[500]};

  @media (max-width: 820px) {
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: -0.48px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 540px;
  background: ${colors.neutral.white};
  border-radius: 16px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  box-shadow: ${shadows.cardStrong};

  @media (max-width: 820px) {
    max-width: 100%;
    padding: 28px 24px;
    gap: 24px;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FieldLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  color: ${colors.blue[800]};

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
  }
`;

const FieldHint = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.24px;
  color: rgba(21, 52, 100, 0.5);
  white-space: pre-line;

  @media (max-width: 820px) {
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: -0.22px;
  }
`;

const AvatarPlaceholder = styled.div<{ $src?: string }>`
  width: 144px;
  height: 144px;
  border-radius: 16px;
  background: ${colors.neutral.disabledBg};
  background-image: ${({ $src }) => ($src ? `url(${$src})` : 'none')};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue[300]};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const InputField = styled.input`
  font-family: ${typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  height: 48px;
  padding: 0 12px;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  background: ${colors.neutral.white};
  color: ${colors.blue[800]};
  outline: none;

  &::placeholder {
    color: ${colors.blue[300]};
  }

  &:focus {
    border-color: ${colors.blue[500]};
  }

  @media (max-width: 820px) {
    height: 40px;
    font-size: 14px;
    line-height: 16.8px;
  }
`;

const HelpText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.24px;
  color: rgba(21, 52, 100, 0.5);

  @media (max-width: 820px) {
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: -0.22px;
  }
`;

const SegmentContainer = styled.div`
  display: flex;
  background: ${colors.neutral.disabledBg};
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 4px;
`;

const SegmentItem = styled.button<{ $active: boolean }>`
  flex: 1;
  height: 33px;
  border: none;
  border-radius: 6px;
  background: ${({ $active }) => ($active ? colors.blue[500] : 'transparent')};
  color: ${({ $active }) => ($active ? colors.neutral.white : colors.blue[800])};
  font-family: ${typography.fontFamily};
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.28px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active }) => ($active ? colors.blue[500] : 'rgba(53, 132, 251, 0.15)')};
    color: ${({ $active }) => ($active ? colors.neutral.white : colors.blue[500])};
  }

  @media (max-width: 820px) {
    font-size: 12px;
    line-height: 14.4px;
    letter-spacing: -0.24px;
  }
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 56px;
  border: none;
  border-radius: 99px;
  background: ${colors.blue[500]};
  color: ${colors.neutral.white};
  font-family: ${typography.fontFamily};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
  align-self: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 820px) {
    width: 320px;
    height: 48px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;

const POSITIONS = ['FRONT_END', 'BACK_END', 'DESIGN', 'PM'] as const;
const POSITION_LABELS: Record<string, string> = {
  FRONT_END: 'FE',
  BACK_END: 'BE',
  DESIGN: 'D',
  PM: 'PM',
};

const ProfilePage = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [link, setLink] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreviewUrl(URL.createObjectURL(file));

    try {
      const { result } = await getPresignedUrl(file.name);
      if (result && typeof result === 'object' && 'url' in result) {
        await fetch(result.url, { method: 'PUT', body: file });
        setProfileImage(result.url.split('?')[0]);
      }
    } catch {
      // presigned URL 실패 시 로컬 미리보기만 유지
    }
  };

  const handleSubmit = async () => {
    if (!position) {
      alert('포지션을 선택해주세요.');
      return;
    }

    try {
      await saveProfile({ position, link, profileImage });
      router.push(MANAGE.HOME);
    } catch {
      alert('저장에 실패했습니다.');
    }
  };

  return (
    <Container>
      <TitleRow>
        <BackButton onClick={() => router.back()}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17.5 21L10.5 14L17.5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </BackButton>
        <Title>프로필 관리</Title>
      </TitleRow>
      <Card>
        <FieldGroup>
          <FieldLabel>프로필 사진</FieldLabel>
          <FieldHint>
            {'사진 추가를 권장합니다\n사진은 프로젝트 하단 팀원 부분에 표시됩니다'}
          </FieldHint>
          <AvatarPlaceholder $src={previewUrl} onClick={handleAvatarClick}>
            {!previewUrl && (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M8 32L16 24L22 30L30 22L40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </AvatarPlaceholder>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>이름</FieldLabel>
          <InputField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>파트</FieldLabel>
          <SegmentContainer>
            {POSITIONS.map((pos) => (
              <SegmentItem
                key={pos}
                $active={position === pos}
                onClick={() => setPosition(pos)}
              >
                {POSITION_LABELS[pos]}
              </SegmentItem>
            ))}
          </SegmentContainer>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>링크</FieldLabel>
          <InputField
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://"
          />
          <HelpText>깃허브 또는 개인 포트폴리오 링크를 첨부해주세요.</HelpText>
        </FieldGroup>
      </Card>
      <SubmitButton onClick={handleSubmit}>저장하기</SubmitButton>
    </Container>
  );
};

export default ProfilePage;
