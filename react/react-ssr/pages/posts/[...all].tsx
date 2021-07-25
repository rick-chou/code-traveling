import Router from "next/router"

const Article = () => {

  const { router } = Router

  console.log(router)

  return (
    <>
      <h2>Dynamic route segments</h2>
      <h3>Path : {router?.asPath}</h3>
    </>
  )
}

export default Article