import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {packagesType} from './packagesType'
import {galleryType} from './galleryType'
import {userType} from './userType'
import {enquiryType} from './enquiryType'
import {newsletterType} from './newsletterType'
import {postType} from './postType'
import {localeType} from './localeType'
import {authorType} from './authorType'


export const schema = {
  types: [
    blockContentType, 
    categoryType, 
    galleryType, 
    packagesType, 
    userType, 
    enquiryType, 
    newsletterType,
    postType,
    localeType,
    authorType
  ],
}
