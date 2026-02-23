'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { colors, typography, shadows, radius, spacing } from '@/styles/theme';
import { saveProject, getPresignedUrl } from '@/api';
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
  max-width: 800px;
  background: ${colors.neutral.white};
  border-radius: ${radius.formCard};
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  box-shadow: ${shadows.cardStrong};

  @media (max-width: 820px) {
    max-width: 100%;
    padding: 16px;
    gap: 24px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const CategoryRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
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

const Select = styled.select`
  font-family: ${typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  height: 48px;
  padding: 0 12px;
  border: 1px solid rgba(21, 52, 100, 0.2);
  border-radius: ${radius.input};
  background: ${colors.neutral.white};
  color: ${colors.blue[800]};
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23153464' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;

  &:focus {
    border-color: ${colors.blue[500]};
  }

  @media (max-width: 820px) {
    height: 40px;
    font-size: 14px;
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
  border: 1px solid rgba(21, 52, 100, 0.2);
  border-radius: ${radius.input};
  background: ${colors.neutral.white};
  color: ${colors.blue[800]};
  outline: none;

  &::placeholder {
    color: ${colors.neutral.disabledText};
  }

  &:focus {
    border-color: ${colors.blue[500]};
  }

  @media (max-width: 820px) {
    height: 40px;
    font-size: 14px;
  }
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Textarea = styled.textarea`
  font-family: ${typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  height: 133px;
  padding: 12px;
  border: 1px solid rgba(21, 52, 100, 0.2);
  border-radius: ${radius.input};
  background: ${colors.neutral.white};
  color: ${colors.blue[800]};
  outline: none;
  resize: vertical;

  &::placeholder {
    color: ${colors.neutral.disabledText};
  }

  &:focus {
    border-color: ${colors.blue[500]};
  }
`;

const CharCount = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.4);
  letter-spacing: -0.24px;
  text-align: right;
`;

const ThumbnailUpload = styled.div<{ $hasImage: boolean }>`
  width: 309px;
  aspect-ratio: 16 / 9;
  border-radius: ${radius.card};
  background: ${({ $hasImage }) => ($hasImage ? 'transparent' : colors.neutral.disabledBg)};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.neutral.disabledText};
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
  transition: opacity 0.2s ease;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 820px) {
    width: 100%;
    max-width: 288px;
  }
`;

const ThumbnailHint = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.neutral.disabledText};
  letter-spacing: -0.24px;
`;

const MemberSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MemberRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 820px) {
    gap: 6px;
  }
`;

const MemberInput = styled(InputField)`
  flex: 1;
  min-width: 0;
`;

const AddButton = styled.button`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border: 1px solid rgba(21, 52, 100, 0.2);
  border-radius: ${radius.input};
  background: transparent;
  color: ${colors.blue[500]};
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(53, 132, 251, 0.05);
  }

  @media (max-width: 820px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
`;

const ChipTagRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 820px) {
    gap: 6px;
  }
`;

const MemberChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: ${radius.pill};
  background: rgba(54, 133, 252, 0.2);
  border: 1px solid ${colors.blue[500]};
  color: ${colors.blue[700]};
  font-size: 12px;
  font-weight: 600;
  line-height: 14.4px;
  letter-spacing: -0.24px;
`;

const RemoveChip = styled.button`
  border: none;
  background: none;
  color: ${colors.blue[500]};
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 66px;
  border: none;
  border-radius: ${radius.button};
  background: ${colors.blue[500]};
  color: ${colors.neutral.white};
  font-family: ${typography.fontFamily};
  font-size: 28px;
  font-weight: 600;
  line-height: 33.6px;
  letter-spacing: -0.56px;
  cursor: pointer;
  align-self: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 48px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;

const GENERATIONS = Array.from({ length: 6 }, (_, i) => ({ value: `${i + 1}`, label: `${i + 1}기` }));
const PROJECT_TYPES = [
  { value: 'FINAL', label: '최종' },
  { value: 'TOY', label: '토이' },
];
const POSITIONS = ['FRONT_END', 'BACK_END', 'UX_UI', 'BX_BI', 'PM'] as const;
const POSITION_LABELS: Record<string, string> = {
  FRONT_END: 'FE',
  BACK_END: 'BE',
  UX_UI: 'UX/UI',
  BX_BI: 'BX/BI',
  PM: 'PM',
};

interface Member {
  name: string;
  position: string;
  url: string;
}

const MAX_DESCRIPTION = 500;

const ProjectManagePage = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [generation, setGeneration] = useState('');
  const [projectType, setProjectType] = useState('');
  const [period, setPeriod] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [serviceLink, setServiceLink] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [members, setMembers] = useState<Member[]>([]);
  const [newMemberName, setNewMemberName] = useState('');

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));

    try {
      const { result } = await getPresignedUrl(file.name);
      if (result && typeof result === 'object' && 'url' in result) {
        await fetch(result.url, { method: 'PUT', body: file });
        setMainImage(result.url.split('?')[0]);
      }
    } catch {
      // presigned URL 실패 시 로컬 미리보기만 유지
    }
  };

  const addMember = () => {
    if (!newMemberName) return;
    setMembers((prev) => [...prev, { name: newMemberName, position: '', url: '' }]);
    setNewMemberName('');
  };

  const removeMember = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!title) {
      alert('프로젝트 이름은 필수입니다.');
      return;
    }

    try {
      await saveProject({
        category: generation,
        title,
        summary,
        description,
        mainImage,
        members: members.filter((m) => m.name),
      });
      router.push(MANAGE.HOME);
    } catch {
      alert('등록에 실패했습니다.');
    }
  };

  return (
    <Container>
      <TitleRow>
        <BackButton onClick={() => router.back()}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M17.5 21L10.5 14L17.5 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BackButton>
        <Title>프로젝트 관리</Title>
      </TitleRow>
      <Card>
        <FieldGroup>
          <FieldLabel>구분</FieldLabel>
          <CategoryRow>
            <Select value={generation} onChange={(e) => setGeneration(e.target.value)} style={{ minWidth: 120 }}>
              <option value="" disabled>
                기수
              </option>
              {GENERATIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
            <Select value={projectType} onChange={(e) => setProjectType(e.target.value)} style={{ minWidth: 160 }}>
              <option value="" disabled>
                규모(최종/토이)
              </option>
              {PROJECT_TYPES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </CategoryRow>
        </FieldGroup>

        <Row>
          <FieldGroup>
            <FieldLabel>진행 기간</FieldLabel>
            <InputField
              type="text"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              placeholder="ex) 2025.03 ~ 2025.06"
            />
          </FieldGroup>
        </Row>

        <FieldGroup>
          <FieldLabel>프로젝트 이름</FieldLabel>
          <InputField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="프로젝트 이름을 입력해주세요"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 슬로건</FieldLabel>
          <InputField
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="프로젝트를 한 줄로 소개해주세요"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 링크</FieldLabel>
          <InputField
            type="url"
            value={serviceLink}
            onChange={(e) => setServiceLink(e.target.value)}
            placeholder="https://"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 설명</FieldLabel>
          <TextareaWrapper>
            <Textarea
              value={description}
              onChange={(e) => {
                if (e.target.value.length <= MAX_DESCRIPTION) {
                  setDescription(e.target.value);
                }
              }}
              placeholder="프로젝트에 대해 자세히 설명해주세요"
            />
            <CharCount>
              {description.length}/{MAX_DESCRIPTION}
            </CharCount>
          </TextareaWrapper>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 썸네일</FieldLabel>
          <ThumbnailUpload
            $hasImage={!!imagePreview}
            onClick={handleImageClick}
            style={imagePreview ? { backgroundImage: `url(${imagePreview})` } : {}}>
            {!imagePreview && (
              <>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M8 32L16 24L22 30L30 22L40 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <ThumbnailHint>.png 형식의 이미지 파일을 첨부해주세요.</ThumbnailHint>
              </>
            )}
          </ThumbnailUpload>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 팀원</FieldLabel>
          <MemberSection>
            <MemberRow>
              <MemberInput
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                placeholder="이름을 입력해주세요"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addMember();
                  }
                }}
              />
              <AddButton type="button" onClick={addMember}>
                +
              </AddButton>
            </MemberRow>
            {members.length > 0 && (
              <ChipTagRow>
                {members.map((member, index) => (
                  <MemberChip key={index}>
                    {member.position && `${POSITION_LABELS[member.position] || member.position} `}
                    {member.name}
                    <RemoveChip onClick={() => removeMember(index)}>x</RemoveChip>
                  </MemberChip>
                ))}
              </ChipTagRow>
            )}
          </MemberSection>
        </FieldGroup>
      </Card>
      <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
    </Container>
  );
};

export default ProjectManagePage;
