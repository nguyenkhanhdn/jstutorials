import { Lesson } from '../../types';
import { ALL_34_CSS_LESSONS, buildCssLessonForTopic } from './cssTopicContent';
import { LESSON_CSS_1, LESSON_CSS_2, LESSON_CSS_3 } from './cssFoundations';
import { LESSON_CSS_4, LESSON_CSS_5 } from './cssBoxAndStyles';
import { LESSON_CSS_6, LESSON_CSS_7, LESSON_CSS_8 } from './cssLayouts';
import { LESSON_CSS_9, LESSON_CSS_10 } from './cssMotionInteractions';

// Map bespoke lessons to priority lookup
const BESPOKE_MAP: Record<string, Lesson> = {
  'les-css-1': LESSON_CSS_1,
  'les-css-2': LESSON_CSS_2,
  'les-css-3': LESSON_CSS_3,
  'les-css-6': LESSON_CSS_4, // Box Model
  'les-css-7': LESSON_CSS_5, // Border & Effects
  'les-css-8': LESSON_CSS_6, // Display & Visibility
  'les-css-20': LESSON_CSS_7, // Flexbox
  'les-css-21': LESSON_CSS_8, // Grid
  'les-css-24': LESSON_CSS_9, // Transform & Transition
  'les-css-29': LESSON_CSS_10 // Responsive & Variables
};

export const ALL_CSS_LESSONS: Lesson[] = ALL_34_CSS_LESSONS.map(lesson => {
  if (BESPOKE_MAP[lesson.id]) {
    // Merge bespoke content while preserving canonical numbering and module association
    return {
      ...BESPOKE_MAP[lesson.id],
      id: lesson.id,
      moduleId: lesson.moduleId,
      track: 'css',
      language: 'css',
      title: lesson.title,
      order: lesson.order
    };
  }
  return lesson;
});

export function getCssLessonById(id: string): Lesson | undefined {
  // Check exact ID match (e.g. les-css-1 to les-css-34)
  const found = ALL_CSS_LESSONS.find(l => l.id === id);
  if (found) return found;

  // Fallback for number match (e.g. les-css-topic-12 or similar)
  const numMatch = id.match(/les-css-(\d+)/);
  if (numMatch) {
    const num = parseInt(numMatch[1], 10);
    if (num >= 1 && num <= 34) {
      return buildCssLessonForTopic(num);
    }
  }

  return undefined;
}

export { ALL_34_CSS_LESSONS, buildCssLessonForTopic };
