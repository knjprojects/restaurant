import {defineField, defineType} from 'sanity'
import { MdCategory } from 'react-icons/md'
export default defineType({
  name: 'cat',
  title: 'Category',
  type: 'document',
  icon:MdCategory,
  fields: [
    defineField({
      name: 'catName',
      title: 'Category name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'catID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
