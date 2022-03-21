import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  var style={'flex-wrap': 'wrap'};
  var buttonstyle={margin:'20px 36px','border': '5px solid #CDE4F6'};
  var buttoncolor={'border': '5px solid #CDE4F6'};
  var bgimg={'background': 'url(/img/tbg1.jpg) no-repeat','background-size': 'cover','background-repeat': 'no-repeat','background-position': 'center'};
  var GhostWhite={'color':'GhostWhite','text-shadow': '#239ED9 2px 0 0, #239ED9 0 2px 0, #239ED9 -2px 0 0, #239ED9 0 -2px 0'}

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={bgimg}>
      <div className="container">
        <h1 className="hero__title" style={GhostWhite}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={GhostWhite}>{siteConfig.tagline}</p>
        <div className={styles.buttons} style={style}>
          <Link className="button button--secondary button--lg" style={buttonstyle} to="/docs/index">
            浏览开发文档📑
          </Link>
          <Link className="button button--secondary button--lg"style={buttoncolor} to="https://github.com/sakura-society/houbunsha-fantasia">
            查看GitHub项目🖥️
          </Link>
          <Link className="button button--secondary button--lg" style={buttonstyle} to="https://jq.qq.com/?_wv=1027&k=M4lxrZf7">
            加入QQ群💬
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
