export const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Product Name",
        type: "string",
      
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: ["Sofa", "Table", "Chair", "Bed", "Wardrobe", "Shelf","decor"],
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
       
      },
      {
        name: "discountedPrice",
        title: "Discounted Price",
        type: "number",
      },
      {
        name: "quantity",
        title: "Quantity",
        type: "number",
       
      },
      {
        name: "image",
        title: "Product Image",
        type: "url",
        options: {
          hotspot: true,
        },
      },
      {
        name: "dimensions",
        title: "Dimensions",
        type: "object",
        fields: [
          { name: "height", title: "Height (cm)", type: "number" },
          { name: "width", title: "Width (cm)", type: "number" },
        ],
      },
      {
        name: "style",
        title: "Style",
        type: "string",
        options: {
          list: ["Classical", "Industrial", "Cottage", "Modern", "Minimalist" , "Vintage"],
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Short product description',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200, 
          slugify: (input: string) => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'productdescription',
        title: 'Product Description',
        type: 'text',
        description: 'Brief product description',
      },
    ],
  };