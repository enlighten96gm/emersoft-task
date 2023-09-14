interface IPost {
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
}

const Post: React.FC<IPost> = ({ title, slug, excerpt, imageUrl }) => {
  return (
    <div className="shadow-2xl rounded-md max-w-[400px] flex flex-col overflow-hidden hover:scale-105 flex-[0_1_100%] h-[440px]">
      <img
        className="max-w-full object-cover h-[300px]"
        src={imageUrl}
        onError={(e) => (e.currentTarget.src = "/asset/error.png")}
      />
      <div className="mx-2 my-4 flex flex-col justify-between">
        <div>{title}</div>
        <div className="text-base text-gray-600/75 text-ellipsis">
          {excerpt}
        </div>
      </div>
    </div>
  );
};

export default Post;
