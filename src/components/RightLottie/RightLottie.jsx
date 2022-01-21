import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/right.json';

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
        background: 'linear-gradient(to right, #20622A, #48B566 131.71%)',
      }}
    ></Lottie>
  );
}