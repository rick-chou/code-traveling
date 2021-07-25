import Router from "next/router"

const Article = () => {

  const { router } = Router

  return (
    <>
      <h2>Dynamic route segments</h2>
      <h3>ID : {router?.query?.id}</h3>
    </>
  )
}

export default Article