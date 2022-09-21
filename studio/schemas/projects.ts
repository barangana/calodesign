export const project = {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'size',
      title: 'Size',
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
