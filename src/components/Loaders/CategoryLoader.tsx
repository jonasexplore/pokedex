import ContentLoader from "react-content-loader";

const CategoryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1190}
      height={41}
      viewBox="0 0 1190 41"
      backgroundColor="#e8e8e8"
      foregroundColor="#f5f5f5"
    >
      <rect x="59" y="0" rx="5" ry="5" width="101" height="41" />
      <rect x="168" y="0" rx="5" ry="5" width="101" height="41" />
      <rect x="277" y="0" rx="5" ry="5" width="101" height="41" />
    </ContentLoader>
  );
};

export default CategoryLoader;
