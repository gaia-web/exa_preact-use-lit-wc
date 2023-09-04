import HelloWorld from "../components/hello-world";

type OtherPageProps = {
  path?: string;
  who?: string;
};

const OtherPage = ({ who }: OtherPageProps) => {
  return <HelloWorld who={who}></HelloWorld>;
};

export default OtherPage;
