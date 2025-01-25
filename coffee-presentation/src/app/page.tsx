'use server'
import CoffeePresentation from "./slide-show"

export default async function Main(props: {
  searchParams: Promise<{ page?: number }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <CoffeePresentation page={searchParams.page}/>
  )
}

