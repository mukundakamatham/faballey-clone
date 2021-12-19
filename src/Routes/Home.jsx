
import ImageSlider from '../components/Homepage/ImageSlider';

function Home() {
  // const isAuth = useSelector((state) => state.auth.isAuth);
  // const token = useSelector((state) => state.auth.token);
 
  // if (!isAuth) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
      <ImageSlider/>
    </div>
  );
}

export { Home };
