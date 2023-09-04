import HelloWorld from "../components/hello-world";

type HomePageProps = {
  path?: string;
};

const HomePage = ({}: HomePageProps) => {
  return <HelloWorld></HelloWorld>;
};

export default HomePage;
