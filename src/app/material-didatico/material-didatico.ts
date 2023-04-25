export interface MaterialDidatico {
  is_template: boolean;
  created_at: string;
  tags: string[];
  cover: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  is_deleted: boolean;
  is_premium: boolean;
  updated_at: string;
  is_renamed: boolean;
  pages?: any[];
  thumbs: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  id: string;
  title: string;
}