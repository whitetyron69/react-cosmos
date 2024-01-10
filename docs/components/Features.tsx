import { ReactNode } from 'react';
import styles from './Features.module.css';
import BoxSvg from './svg/icons/box.svg';
import CodeSvg from './svg/icons/code.svg';
import MonitorSvg from './svg/icons/monitor.svg';
import SettingsSvg from './svg/icons/settings.svg';
import UploadCloudSvg from './svg/icons/upload-cloud.svg';
import ZapSvg from './svg/icons/zap.svg';

export function Features() {
  return (
    <ul className={styles.features}>
      <Feature
        title="Fixtures"
        description="File-system based module convention for defining component states effortlessly."
        icon={<CodeSvg />}
      />
      <Feature
        title="User Interface"
        description="Beautiful interface for browsing fixtures and manipulating component inputs."
        icon={<MonitorSvg />}
      />
      <Feature
        title="Static Export"
        description="Interactive component library deployable to any static hosting service."
        icon={<UploadCloudSvg />}
      />
      <Feature
        title="Integration"
        description="Vite, Webpack, React Native, Next.js, and support for custom setups."
        icon={<SettingsSvg />}
      />
      <Feature
        title="Plugins"
        description="Full-stack plugin system for extending every aspect of React Cosmos."
        icon={<BoxSvg />}
      />
      <Feature
        title="High Quality"
        description="100% TypeScript. Minimal deps. Meticulously designed and tested."
        icon={<ZapSvg />}
      />
    </ul>
  );
}

type FeatureProps = {
  title: string;
  description: string;
  icon: ReactNode;
};
function Feature({ title, description, icon }: FeatureProps) {
  return (
    <li>
      <strong>
        {icon} {title}
      </strong>{' '}
      {description}
    </li>
  );
}