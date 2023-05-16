type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    id: string;
  };
};

const NFTDetailsPage = ({ params, searchParams }: Props) => {
  const { slug } = params;
  const { id } = searchParams;
  return (
    <div>
      <h1>{`This is the NFT Details Page for ${slug} with id ${id}`}</h1>
    </div>
  );
};

export default NFTDetailsPage;
