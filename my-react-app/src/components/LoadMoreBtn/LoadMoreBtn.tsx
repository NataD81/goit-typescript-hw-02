import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={s.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
