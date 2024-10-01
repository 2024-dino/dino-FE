interface Props {
  isMarked: boolean;
}

const BookmarkIcon = ({ isMarked }: Props) => {
  return (
    <div>
      {isMarked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
        >
          <path
            d="M23.5 12.2549C23.5 14.0718 21.9548 15.5 20.1053 15.5C17.8202 15.5 16.0466 15.2552 14.3585 15.0146C14.3148 15.0084 14.2711 15.0021 14.2275 14.9959C12.5875 14.762 11.0261 14.5392 9.10526 14.5392C8.11177 14.5392 7.09881 14.6393 6.09118 14.7425C6.05325 14.7464 6.01531 14.7503 5.97737 14.7542C5.01835 14.8526 4.05908 14.951 3.17105 14.951C1.72121 14.951 0.5 13.83 0.5 12.3922C0.5 11.1682 1.38537 10.1735 2.54284 9.90494C2.53189 9.77453 2.52632 9.64275 2.52632 9.5098C2.52632 6.93997 4.59055 4.86782 7.17924 4.63871C8.51667 2.17286 11.2172 0.5 14.3158 0.5C18.7233 0.5 22.3421 3.89464 22.3421 8.13726C22.3421 8.66686 22.2854 9.18428 22.1773 9.68414C22.9757 10.2732 23.5 11.2009 23.5 12.2549Z"
            fill="white"
            stroke="#CCCCCC"
          />
          <path
            d="M20.1053 15C21.704 15 23 13.771 23 12.2549C23 11.2609 22.4428 10.3902 21.6085 9.90851C21.761 9.34214 21.8421 8.74868 21.8421 8.13726C21.8421 4.19546 18.4725 1 14.3158 1C11.2961 1 8.6917 2.68647 7.49292 5.12038C5.01138 5.20277 3.02632 7.13645 3.02632 9.5098C3.02632 9.79159 3.0543 10.0672 3.10777 10.3342C1.938 10.3659 1 11.2752 1 12.3922C1 13.5292 1.97201 14.451 3.17105 14.451C4.95551 14.451 7.05966 14.0392 9.10526 14.0392C13.1299 14.0392 15.6108 15 20.1053 15Z"
            fill="#E9F6FF"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="17"
          viewBox="0 0 25 17"
          fill="none"
        >
          <path
            d="M24 12.7549C24 14.5718 22.4548 16 20.6053 16C18.3202 16 16.5466 15.7552 14.8585 15.5146C14.8148 15.5084 14.7711 15.5021 14.7275 15.4959C13.0875 15.262 11.5261 15.0392 9.60526 15.0392C8.61177 15.0392 7.59881 15.1393 6.59118 15.2425C6.55325 15.2464 6.51531 15.2503 6.47737 15.2542C5.51835 15.3526 4.55908 15.451 3.67105 15.451C2.22121 15.451 1 14.33 1 12.8922C1 11.6682 1.88537 10.6735 3.04284 10.4049C3.03189 10.2745 3.02632 10.1427 3.02632 10.0098C3.02632 7.43997 5.09055 5.36782 7.67924 5.13871C9.01667 2.67286 11.7172 1 14.8158 1C19.2233 1 22.8421 4.39464 22.8421 8.63726C22.8421 9.16686 22.7854 9.68428 22.6773 10.1841C23.4757 10.7732 24 11.7009 24 12.7549Z"
            fill="white"
            stroke="#CCCCCC"
          />
        </svg>
      )}
    </div>
  );
};

export default BookmarkIcon;
