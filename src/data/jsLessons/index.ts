import { Lesson } from '../../types';
import { JS_MODULE_1_LESSONS } from './jsModule1';
import { JS_MODULE_2_LESSONS } from './jsModule2';
import { JS_MODULE_3_LESSONS } from './jsModule3';
import { JS_MODULE_4_LESSONS } from './jsModule4';
import { JS_MODULE_5_LESSONS } from './jsModule5';
import { JS_MODULE_6_LESSONS } from './jsModule6';
import { JS_MODULE_7_LESSONS } from './jsModule7';
import { JS_MODULE_8_LESSONS } from './jsModule8';
import { JS_MODULE_9_LESSONS } from './jsModule9';
import { JS_MODULE_10_LESSONS } from './jsModule10';
import { JS_MODULE_11_LESSONS } from './jsModule11';
import { JS_MODULE_12_LESSONS } from './jsModule12';
import { JS_MODULE_13_LESSONS } from './jsModule13';
import { JS_MODULE_14_LESSONS } from './jsModule14';
import { JS_MODULE_15_LESSONS } from './jsModule15';
import { JS_MODULE_16_LESSONS } from './jsModule16';
import { JS_MODULE_17_LESSONS } from './jsModule17';

export * from './jsModule1';
export * from './jsModule2';
export * from './jsModule3';
export * from './jsModule4';
export * from './jsModule5';
export * from './jsModule6';
export * from './jsModule7';
export * from './jsModule8';
export * from './jsModule9';
export * from './jsModule10';
export * from './jsModule11';
export * from './jsModule12';
export * from './jsModule13';
export * from './jsModule14';
export * from './jsModule15';
export * from './jsModule16';
export * from './jsModule17';

export const ALL_JS_LESSONS: Lesson[] = [
  ...JS_MODULE_1_LESSONS,
  ...JS_MODULE_2_LESSONS,
  ...JS_MODULE_3_LESSONS,
  ...JS_MODULE_4_LESSONS,
  ...JS_MODULE_5_LESSONS,
  ...JS_MODULE_6_LESSONS,
  ...JS_MODULE_7_LESSONS,
  ...JS_MODULE_8_LESSONS,
  ...JS_MODULE_9_LESSONS,
  ...JS_MODULE_10_LESSONS,
  ...JS_MODULE_11_LESSONS,
  ...JS_MODULE_12_LESSONS,
  ...JS_MODULE_13_LESSONS,
  ...JS_MODULE_14_LESSONS,
  ...JS_MODULE_15_LESSONS,
  ...JS_MODULE_16_LESSONS,
  ...JS_MODULE_17_LESSONS,
];

export const JS_LESSONS_BY_MODULE: Record<string, Lesson[]> = {
  'mod-1': JS_MODULE_1_LESSONS,
  'mod-2': JS_MODULE_2_LESSONS,
  'mod-3': JS_MODULE_3_LESSONS,
  'mod-4': JS_MODULE_4_LESSONS,
  'mod-5': JS_MODULE_5_LESSONS,
  'mod-6': JS_MODULE_6_LESSONS,
  'mod-7': JS_MODULE_7_LESSONS,
  'mod-8': JS_MODULE_8_LESSONS,
  'mod-9': JS_MODULE_9_LESSONS,
  'mod-10': JS_MODULE_10_LESSONS,
  'mod-11': JS_MODULE_11_LESSONS,
  'mod-12': JS_MODULE_12_LESSONS,
  'mod-13': JS_MODULE_13_LESSONS,
  'mod-14': JS_MODULE_14_LESSONS,
  'mod-15': JS_MODULE_15_LESSONS,
  'mod-16': JS_MODULE_16_LESSONS,
  'mod-17': JS_MODULE_17_LESSONS,
};

const jsLessonMap = new Map<string, Lesson>();
for (const lesson of ALL_JS_LESSONS) {
  jsLessonMap.set(lesson.id, lesson);
}

export function getJsLessonById(lessonId: string): Lesson | undefined {
  return jsLessonMap.get(lessonId);
}
