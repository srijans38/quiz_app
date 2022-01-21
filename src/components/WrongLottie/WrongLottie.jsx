import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/wrong.json';

export default function RightLottie(props) {
  const options = {
    animationData,
    autoplay: true,
    loop: false,
  };

  return (
    <Lottie
      options={options}
      {...props}
      style={{
        position: 'absolute',
        inset: '0',
        scale: '1.5',
        background: 'linear-gradient(to right, #F35325, #F3AD25 131.71%)',
      }}
    ></Lottie>
  );
}
