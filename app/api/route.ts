import { NextResponse } from 'next/server'
 
export async function POST() {
  /*const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: {
      
      //'Content-Type': 'application/json',
      //'API-Key': process.env.DATA_API_KEY?.toString(),
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
    
  })
 */
  const data ="brooooo you gt"; //await res.json()*/
 
  return NextResponse.json(data)
}