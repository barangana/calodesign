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
      required: true,
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
      required: true,
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      description: 'What is the type of the location?',
      type: 'string',
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
