export default {
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del producto',
      type: 'string',
    },
    {
      name: 'descripcion',
      title: 'Descripcion del producto',
      type: 'string',
    },
    {
      name: 'precio',
      title: 'Precio del producto',
      type: 'number',
    },
    {
      name: 'precio_id',
      title: 'Stripe precio del producto ID',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Imagenes del producto',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Slug del Producto',
      type: 'slug',
      options: {
        source: 'nombre'
      }
    },
    {
      name: 'categorias',
      title: 'categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'categoria'}}]
    },
  ],
}
