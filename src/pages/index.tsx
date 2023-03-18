import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Top from './home/top';
import Introduction from './home/introduction';
import MseMap from './home/msemap';
import Feature from './home/feature';
import User from './home/users';
import Community from './home/community';
// import { Footer } from '../components';
import './index.scss';

export default function Home(): React.Element {
  const { siteConfig, i18n } = useDocusaurusContext();
  const curLang = i18n.currentLocale;
  const el = React.useRef<HTMLDivElement>(null);

  const setEleBg = (ele: HTMLDivElement, isTransparent: boolean) => {
    if (isTransparent) {
      ele.style.backgroundColor = 'transparent';
      ele.style.boxShadow = 'unset';
    } else {
      ele.style.backgroundColor = '#fff';
      ele.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px';
    }
  };

  React.useEffect(() => {
    el.current = document.getElementsByClassName('navbar')[0] as HTMLDivElement;
    el.current.style.position = 'fixed';
    el.current.style.width = '100%';

    setEleBg(el.current, true);
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      setEleBg(el.current, scrollTop < 60);
    };
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout title={'Higress'} description="HIgress official site">
      <div ref={el} className="home-page">
        <Top language={curLang} />
        <Introduction language={curLang} />
        <MseMap />
        <Feature />
        <User />
        <Community />
        {/* <Footer logo={'//img.alicdn.com/imgextra/i2/O1CN01oNTGgE1lfW7oEPIzP_!!6000000004846-2-tps-960-290.png'} /> */}
      </div>
    </Layout>
  );
}
