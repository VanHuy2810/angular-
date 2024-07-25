import { ObjectId } from 'bson';
export interface IPost {
  id: ObjectId | undefined;
  title: string;
  content: string;
  author: string;
}
