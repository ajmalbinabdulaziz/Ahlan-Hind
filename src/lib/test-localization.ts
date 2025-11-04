// Test script to verify localization setup
import { client } from './sanity'
import { postQueries, categoryQueries } from './queries'

export async function testLocalization() {
  try {
    console.log('Testing localization setup...')
    
    // Test fetching posts in English
    console.log('Fetching English posts...')
    const englishPosts = await client.fetch(postQueries.getAll('en'))
    console.log(`Found ${englishPosts.length} English posts`)
    
    // Test fetching posts in Arabic
    console.log('Fetching Arabic posts...')
    const arabicPosts = await client.fetch(postQueries.getAll('ar'))
    console.log(`Found ${arabicPosts.length} Arabic posts`)
    
    // Test fetching categories in English
    console.log('Fetching English categories...')
    const englishCategories = await client.fetch(categoryQueries.getAll('en'))
    console.log(`Found ${englishCategories.length} English categories`)
    
    // Test fetching categories in Arabic
    console.log('Fetching Arabic categories...')
    const arabicCategories = await client.fetch(categoryQueries.getAll('ar'))
    console.log(`Found ${arabicCategories.length} Arabic categories`)
    
    console.log('Localization test completed successfully!')
    
    return {
      success: true,
      englishPosts: englishPosts.length,
      arabicPosts: arabicPosts.length,
      englishCategories: englishCategories.length,
      arabicCategories: arabicCategories.length
    }
  } catch (error) {
    console.error('Localization test failed:', error)
    const message = error instanceof Error ? error.message : String(error)
    return {
      success: false,
      error: message
    }
  }
}

// Example of how to use the test function
export async function runLocalizationTest() {
  const result = await testLocalization()
  
  if (result.success) {
    console.log('✅ Localization setup is working correctly!')
    console.log(`📊 Results:`)
    console.log(`   - English posts: ${result.englishPosts}`)
    console.log(`   - Arabic posts: ${result.arabicPosts}`)
    console.log(`   - English categories: ${result.englishCategories}`)
    console.log(`   - Arabic categories: ${result.arabicCategories}`)
  } else {
    console.error('❌ Localization setup has issues:', result.error)
  }
  
  return result
}
