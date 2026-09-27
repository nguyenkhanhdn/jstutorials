import { Lesson } from '../../types';
import { JS_MODULE_1_LESSONS } from './jsModule1';
import { JS_MODULE_2_LESSONS } from './jsModule2';
import { JS_MODULE_3_LESSONS } from './jsModule3';
import { JS_MODULE_4_LESSONS } from './jsModule4';
import { JS_MODULE_5_LESSONS } from './jsModule5';
import { JS_MODULE_6_LESSONS } from './jsModule6';

export * from './jsModule1';
export * from './jsModule2';
export * from './jsModule3';
export * from './jsModule4';
export * from './jsModule5';
export * from './jsModule6';

export const ALL_JS_LESSONS: Lesson[] = [
  ...JS_MODULE_1_LESSONS,
  ...JS_MODULE_2_LESSONS,
  ...JS_MODULE_3_LESSONS,
  ...JS_MODULE_4_LESSONS,
  ...JS_MODULE_5_LESSONS,
  ...JS_MODULE_6_LESSONS,
];

export const JS_LESSONS_BY_MODULE: Record<string, Lesson[]> = {
  'mod-1': JS_MODULE_1_LESSONS,
  'mod-2': JS_MODULE_2_LESSONS,
  'mod-3': JS_MODULE_3_LESSONS,
  'mod-4': JS_MODULE_4_LESSONS,
  'mod-5': JS_MODULE_5_LESSONS,
  'mod-6': JS_MODULE_6_LESSONS,
};

const jsLessonMap = new Map<string, Lesson>();
for (const lesson of ALL_JS_LESSONS) {
  jsLessonMap.set(lesson.id, lesson);
}

export function getJsLessonById(lessonId: string): Lesson | undefined {
  return jsLessonMap.get(lessonId);
}
