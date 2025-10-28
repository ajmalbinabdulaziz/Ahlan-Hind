import { NextRequest, NextResponse } from 'next/server'
import { testLocalization } from '../../../lib/test-localization'

export async function GET(request: NextRequest) {
  try {
    const result = await testLocalization()
    
    return NextResponse.json({
      success: result.success,
      message: result.success 
        ? 'Localization setup is working correctly!' 
        : 'Localization setup has issues',
      data: result,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to test localization',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
