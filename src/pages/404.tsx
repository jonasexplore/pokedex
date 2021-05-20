interface NotFoundProps {
  imgNotFound: ImgNotFound[];
}

interface ImgNotFound {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function Custom404({imgNotFound}: NotFoundProps) {
  return <>
    <img src={`${imgNotFound[0].url}`} alt="cat" width={200} />
    <h1>404 - Page Not Found HAHAHA</h1>
  </>
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search",
    {
      headers: new Headers({
        'x-api-key': '75e2f2fe-dbda-4481-a043-d885905e99d3'
      })
    }
  ).then((data) => data.json());
  
  return {
    props: {imgNotFound: response}, // will be passed to the page component as props
  }
}