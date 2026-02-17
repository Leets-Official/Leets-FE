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
                    <Image src="/assets/image/Project/Arrow.svg" alt="arrow" width={32} height={32} />
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
                    {benefits.map((benefit, index) => (
                      <motion.div key={benefit} variants={itemVariants}>
                        <S.BubbleCard $index={index}>{benefit}</S.BubbleCard>
                      </motion.div>
                    ))}
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
                            size="small"
                            icon={
                              <Image
                                src={icons[index]}
                                alt=""
                                width={64}
                                height={64}
                                style={{ objectFit: 'contain' }}
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
