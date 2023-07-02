import { type SchemaTypeDefinition } from 'sanity'
import dish from './schemas/dish'
import cat from './schemas/category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    dish, cat
  ],
}
