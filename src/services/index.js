import { client } from "../sanity/lib/client"

export const getCategory = async (locale = 'en') => {
    const query = `*[_type=="category" ]{
        title,
        "localizedTitle": title.${locale},
        "localizedDescription": description.${locale},
        slug
      }`

    const categories = await client.fetch(query)

    return categories
}

export const getPackages = async (locale = 'en') => {
  const query = `*[_type=="packages"]{
    _id,
    _createdAt,
    title,
    "localizedTitle": title.${locale},
    category[0]->{
      title,
      "localizedTitle": title.${locale}
    },
    price,
    "localizedPrice": price.${locale},
    mainImage,
    "localizedAlt": mainImage.alt.${locale},
    slug {
      current
    },
  }`
 
  const packages = await client.fetch(query)
  return packages
}

export const getPackageDetails = async (slug, locale = 'en') => {
  const query = `*[_type=="packages" && slug.current==$slug][0]{
    _id,
    _createdAt,
    title,
    "localizedTitle": title.${locale},
    category[0]->{
      title,
      "localizedTitle": title.${locale}
    },
    description,
    "localizedDescription": description.${locale},
    mainImage,
    "localizedAlt": mainImage.alt.${locale},
    slug,
    price,
    "localizedPrice": price.${locale},
    body,
    "localizedBody": body.${locale}
  }`;

  const packageDetails = await client.fetch(query, { slug })

  return packageDetails
}
