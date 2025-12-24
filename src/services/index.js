import { client } from "../sanity/lib/client"
import { getLocalizedString } from "../lib/getLocalizedString"

export const getCategory = async (locale = 'en') => {
    const query = `*[_type=="category" ]{
        title,
        description,
        slug
      }`

    const categories = await client.fetch(query)

    return categories.map((cat) => ({
      ...cat,
      localizedTitle: getLocalizedString(cat.title, locale),
      localizedDescription: getLocalizedString(cat.description, locale),
    }))
}

export const getPackages = async (locale = 'en') => {
  const query = `*[_type=="packages"]{
    _id,
    _createdAt,
    title,
    category[0]->{
      title
    },
    price,
    mainImage,
    slug {
      current
    },
  }`
 
  const packages = await client.fetch(query)
  
  return packages.map((pkg) => ({
    ...pkg,
    localizedTitle: getLocalizedString(pkg.title, locale),
    category: pkg.category ? {
      ...pkg.category,
      localizedTitle: getLocalizedString(pkg.category.title, locale),
    } : null,
    localizedPrice: getLocalizedString(pkg.price, locale),
    localizedAlt: pkg.mainImage?.alt ? getLocalizedString(pkg.mainImage.alt, locale) : '',
  }))
}

export const getPackageDetails = async (slug, locale = 'en') => {
  const query = `*[_type=="packages" && slug.current==$slug][0]{
    _id,
    _createdAt,
    title,
    category[0]->{
      title
    },
    description,
    mainImage,
    slug,
    price,
    body
  }`;

  const packageDetails = await client.fetch(query, { slug })

  if (!packageDetails) return null

  return {
    ...packageDetails,
    localizedTitle: getLocalizedString(packageDetails.title, locale),
    category: packageDetails.category ? {
      ...packageDetails.category,
      localizedTitle: getLocalizedString(packageDetails.category.title, locale),
    } : null,
    localizedDescription: getLocalizedString(packageDetails.description, locale),
    localizedAlt: packageDetails.mainImage?.alt ? getLocalizedString(packageDetails.mainImage.alt, locale) : '',
    localizedPrice: getLocalizedString(packageDetails.price, locale),
    localizedBody: getLocalizedString(packageDetails.body, locale),
  }
}
