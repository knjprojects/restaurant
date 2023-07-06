import {defineField, defineType} from 'sanity'
import { AiOutlineMenu } from 'react-icons/ai'
//import {PlayIcon,MenuIcon} from "@sanity/icons" doeasnt work with schema
export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  icon:AiOutlineMenu,
  fields: [
    
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
    }),
     defineField({
      name: 'type',
      title: 'Dish Type(Meat or Veggie)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'DishID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      /*validation: (Rule) =>
        Rule.custom(async (value, context) => {
          /*const isUnique = await isUniqueColour(value, context);
          if (!isUnique) return 'Colour is not unique';
          return true;
        }),*/
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'price',
      title: 'Cost/Price',
      type:'number'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type:'string'
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'reference',
      to: {type:'cat' }
      //[{type: 'reference', to: {type: 'category'}}],
    }),
    
   
  ],

  /*preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'image',
    },
    /*prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  }*/
})
/* */