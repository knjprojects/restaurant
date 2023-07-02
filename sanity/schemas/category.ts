import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cat',
  title: 'Category',
  type: 'document',
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
