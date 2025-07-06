import { type SchemaTypeDefinition } from 'sanity'
import Review from './Review'
import Contact from './Contact'
import Quote from './Quote' 
import jobPost from './Jobs'
import Blogs from './Blogs'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Review, Contact, Quote, jobPost , Blogs],
}
