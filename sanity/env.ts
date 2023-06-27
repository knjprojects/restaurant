export const apiVersion =
  process.env.SANITY_STUDIO_SANITY_API_VERSION || '2023-06-19'

export const dataset:any = //assertValue(
  process.env.SANITY_STUDIO_SANITY_DATASET//,
  //'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
//)

export const projectId:any = //assertValue(
  process.env.SANITY_STUDIO_SANITY_PROJECT_ID
  //"okxmnsmd",
  //'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
//)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
