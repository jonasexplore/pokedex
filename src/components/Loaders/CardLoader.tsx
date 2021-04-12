import ContentLoader from "react-content-loader";

const CardLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={290}
      viewBox="0 0 200 290"
      backgroundColor="#dedede"
      foregroundColor="#f2f2f2"
    >
      <rect x="47" y="21" rx="11" ry="11" width="96" height="96" />
      <rect x="9" y="233" rx="5" ry="5" width="172" height="40" />
      <rect x="11" y="141" rx="0" ry="0" width="172" height="24" />
      <rect x="10" y="170" rx="0" ry="0" width="80" height="20" />
      <circle cx="173" cy="18" r="16" />
    </ContentLoader>
  );
};

export default CardLoader;
