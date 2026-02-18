'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { colors, typography, shadows } from '@/styles/theme';
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
  border-radius: 16px;
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
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  background: ${colors.neutral.white};
  color: ${colors.blue[800]};
  outline: none;
  appearance: none;

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
  }
`;

const Textarea = styled.textarea`
  font-family: ${typography.fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  height: 133px;
  padding: 12px;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  background: ${colors.neutral.white};
  color: ${colors.blue[800]};
  outline: none;
  resize: vertical;

  &::placeholder {
    color: ${colors.blue[300]};
  }

  &:focus {
    border-color: ${colors.blue[500]};
  }
`;

const ThumbnailUpload = styled.div<{ $hasImage: boolean }>`
  width: 309px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  background: ${({ $hasImage }) => ($hasImage ? 'transparent' : colors.neutral.disabledBg)};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.blue[300]};
  font-size: 14px;
  font-weight: 500;
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
    flex-wrap: wrap;
    gap: 6px;
  }
`;

const MemberInput = styled(InputField)`
  flex: 1;
  min-width: 0;
`;

const MemberSelect = styled(Select)`
  min-width: 140px;

  @media (max-width: 820px) {
    min-width: 100px;
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
  border-radius: 999px;
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

const AddMemberButton = styled.button`
  font-family: ${typography.fontFamily};
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.28px;
  padding: 10px 20px;
  border: 1px dashed rgba(21, 52, 100, 0.3);
  border-radius: 8px;
  background: transparent;
  color: ${colors.blue[500]};
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: rgba(53, 132, 251, 0.05);
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

const CATEGORIES = [
  { value: 'WEB', label: '웹' },
  { value: 'APP', label: '앱' },
  { value: 'AI', label: 'AI' },
  { value: 'GAME', label: '게임' },
  { value: 'ETC', label: '기타' },
];
const PROJECT_TYPES = [
  { value: 'FINAL', label: '최종 프로젝트' },
  { value: 'TOY', label: '토이 프로젝트' },
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

const ProjectManagePage = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState('');
  const [projectType, setProjectType] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [serviceLink, setServiceLink] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [members, setMembers] = useState<Member[]>([]);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberPosition, setNewMemberPosition] = useState('');

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
    setMembers((prev) => [...prev, { name: newMemberName, position: newMemberPosition, url: '' }]);
    setNewMemberName('');
    setNewMemberPosition('');
  };

  const removeMember = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!category || !title) {
      alert('카테고리와 프로젝트 제목은 필수입니다.');
      return;
    }

    try {
      await saveProject({
        category,
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
            <path d="M17.5 21L10.5 14L17.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </BackButton>
        <Title>프로젝트 관리</Title>
      </TitleRow>
      <Card>
        <Row>
          <FieldGroup>
            <FieldLabel>카테고리</FieldLabel>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>
                선택
              </option>
              {CATEGORIES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel>프로젝트 유형</FieldLabel>
            <Select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
              <option value="" disabled>
                선택
              </option>
              {PROJECT_TYPES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </FieldGroup>
        </Row>

        <FieldGroup>
          <FieldLabel>한줄 소개</FieldLabel>
          <InputField
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="프로젝트를 한 줄로 소개해주세요"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 제목</FieldLabel>
          <InputField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="프로젝트 이름을 입력해주세요"
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
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="프로젝트에 대해 자세히 설명해주세요"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>프로젝트 썸네일</FieldLabel>
          <ThumbnailUpload
            $hasImage={!!imagePreview}
            onClick={handleImageClick}
            style={imagePreview ? { backgroundImage: `url(${imagePreview})` } : {}}
          >
            {!imagePreview && '클릭하여 이미지를 업로드하세요'}
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
          <FieldLabel>팀원</FieldLabel>
          <MemberSection>
            <MemberRow>
              <MemberInput
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                placeholder="이름"
              />
              <MemberSelect
                value={newMemberPosition}
                onChange={(e) => setNewMemberPosition(e.target.value)}
              >
                <option value="">포지션</option>
                {POSITIONS.map((pos) => (
                  <option key={pos} value={pos}>
                    {POSITION_LABELS[pos]}
                  </option>
                ))}
              </MemberSelect>
              <AddMemberButton type="button" onClick={addMember}>
                + 추가
              </AddMemberButton>
            </MemberRow>
            {members.length > 0 && (
              <ChipTagRow>
                {members.map((member, index) => (
                  <MemberChip key={index}>
                    {member.name}
                    {member.position && ` · ${POSITION_LABELS[member.position] || member.position}`}
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
