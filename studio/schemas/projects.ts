export const projects = {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the project',
      validation: (Rule) => Rule.required().min(5).max(90),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      description: 'Main image of the actual place or project.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'size',
      title: 'Size',
      description: 'What is/was the physical size of the project?',
      validation: (Rule) =>
        Rule.required().min(1).warning('Numbers works best here'),
      type: 'number',
    },
    {
      name: 'type',
      title: 'Type',
      description: 'What is the type of the location?',
      validation: (Rule) => Rule.required().min(5).max(90),
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description:
        'The description of the project or definition of this project entails.',
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
