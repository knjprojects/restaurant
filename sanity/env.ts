export const apiVersion =
  '2023-06-19'

export const dataset: any ='production'
  //process.env.NEXT_PUBLIC_SANITY_DATASET
  //process.env.SANITY_STUDIO_DATASET//'production' //assertValue(
  //process.env.SANITY_STUDIO_SANITY_DATASET//,
  //'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
//)

export const projectId:any = 'okxmnsmd'//assertValue(
 // process.env.SANITY_STUDIO_PROJECT_ID
 //process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
 // ,
  //'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
//)

export const useCdn = true

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
