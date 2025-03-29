export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const FILTERS = ['all', 'active', 'completed'] as const;
type Filter = (typeof FILTERS)[number];

export { FILTERS, type Filter };
