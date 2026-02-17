'use client';

import { memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROMOTION_LAYOUT } from '@/constants';
import CardInfo from '@/components/Common/CardInfo';
import * as S from './ActivitySection.styled';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BUBBLE_COLORS = [
  { fill: '#3584FB', direction: 'left' },
  { fill: '#FD8AF1', direction: 'right' },
  { fill: '#10DAB2', direction: 'left' },
] as const;

const PC_PATH = {
  left: 'M312.5 0.5C354.474 0.5 388.5 34.5264 388.5 76.5C388.5 118.474 354.474 152.5 312.5 152.5H110.228L50.0322 180.5L57.0928 149.998C24.5205 141.42 0.5 111.766 0.5 76.5C0.5 34.5264 34.5264 0.500002 76.5 0.5H312.5Z',
  right:
    'M76.5 0.5C34.5264 0.5 0.5 34.5264 0.5 76.5C0.5 118.474 34.5264 152.5 76.5 152.5H278.772L338.968 180.5L331.907 149.998C364.48 141.42 388.5 111.766 388.5 76.5C388.5 34.5264 354.474 0.500002 312.5 0.5H76.5Z',
};

const MOBILE_PATH = {
  left: {
    viewBox: '0 0 272 65',
    d: 'M242.878 0.50078C258.92 0.500781 271.924 13.5048 271.924 29.546C271.924 45.5873 258.92 58.5913 242.878 58.5913H29.546C28.1853 58.5913 26.8468 58.4946 25.5359 58.3135C21.413 61.4949 13.916 65.0683 4.63515 63.381L2.99783 63.0836L4.52756 62.4283C5.57596 61.9789 8.24117 60.3423 10.6005 57.3931C11.4984 56.2707 12.3491 54.9595 13.0506 53.4534C5.46914 48.2124 0.50078 39.4602 0.50078 29.546C0.50078 13.5048 13.5048 0.50078 29.546 0.50078H242.878Z',
  },
  right: {
    viewBox: '49 0 272 65',
    d: 'M78.1217 0.50078C62.0804 0.500781 49.0764 13.5048 49.0764 29.546C49.0764 45.5873 62.0804 58.5913 78.1217 58.5913H291.454C292.815 58.5913 294.153 58.4946 295.464 58.3135C299.587 61.4949 307.084 65.0683 316.365 63.381L318.002 63.0836L316.472 62.4283C315.424 61.9789 312.759 60.3423 310.4 57.3931C309.502 56.2707 308.651 54.9595 307.949 53.4534C315.531 48.2124 320.499 39.4602 320.499 29.546C320.499 13.5048 307.495 0.50078 291.454 0.50078H78.1217Z',
  },
};

const ActivitySections = () => {
  return (
    <>
      {PROMOTION_LAYOUT.map((section) => {
        const { title, variant, benefits } = section;
        const icons = 'icons' in section ? section.icons : undefined;

        return (
          <S.Section key={title}>
            <S.SectionInner>
              <S.TitleBlock>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}>
                  <S.Title>{title}</S.Title>
                </motion.div>
                {variant === 'number' && title === 'Project' && (
                  <S.ProjectLink href="/project">
                    프로젝트 보러가기
                    <S.ProjectArrow>
                      <Image src="/assets/image/Project/Arrow.svg" alt="arrow" width={32} height={32} />
                    </S.ProjectArrow>
                  </S.ProjectLink>
                )}
              </S.TitleBlock>

              {variant === 'bubble' ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}>
                  <S.BubbleContainer>
                    {benefits.map((benefit, index) => {
                      const { fill, direction } = BUBBLE_COLORS[index];
                      const pcPath = PC_PATH[direction];
                      const mobilePath = MOBILE_PATH[direction];
                      return (
                        <motion.div key={benefit} variants={itemVariants}>
                          <S.BubbleCard>
                            <S.BubbleSVGPC>
                              <svg viewBox="0 0 389 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={pcPath} fill={fill} fillOpacity={0.2} stroke={fill} />
                              </svg>
                            </S.BubbleSVGPC>
                            <S.BubbleSVGMobile>
                              <svg
                                viewBox={mobilePath.viewBox}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d={mobilePath.d} fill={fill} fillOpacity={0.2} stroke={fill} />
                              </svg>
                            </S.BubbleSVGMobile>
                            <S.BubbleText>{benefit}</S.BubbleText>
                          </S.BubbleCard>
                        </motion.div>
                      );
                    })}
                  </S.BubbleContainer>
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}>
                  <S.CardGrid>
                    {benefits.map((benefit, index) => (
                      <motion.div key={benefit} variants={itemVariants}>
                        {variant === 'icon' && icons ? (
                          <CardInfo
                            variant="icon"
                            size="large"
                            icon={
                              <Image
                                src={icons[index]}
                                alt=""
                                width={64}
                                height={64}
                              />
                            }
                            text={benefit}
                          />
                        ) : (
                          <CardInfo variant="number" size="large" number={index + 1} text={benefit} />
                        )}
                      </motion.div>
                    ))}
                  </S.CardGrid>
                </motion.div>
              )}
            </S.SectionInner>
          </S.Section>
        );
      })}
    </>
  );
};

export default memo(ActivitySections);
