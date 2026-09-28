import { Lesson } from '../../types';
import { ALL_34_CSS_LESSONS, buildCssLessonForTopic } from './cssTopicContent';

export const ALL_CSS_LESSONS: Lesson[] = ALL_34_CSS_LESSONS;

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
